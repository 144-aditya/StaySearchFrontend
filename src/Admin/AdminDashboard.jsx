import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminStats from './AdminStats';
import AdminUsers from './AdminUsers';
import AdminBookings from './AdminBookings';
import AdminSettings from './AdminSettings';
import AdminNavbar from './components/AdminNavbar';
import '../Admin/styles/admin.css';

const API_BASE_URL = 'https://staysearch-api.onrender.com/api';

function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({});
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('userRole')?.trim().toUpperCase();

    if (!token || userRole !== 'ADMIN') {
      navigate('/');
      return;
    }

    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    const config = { 
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      } 
    };
    
    try {
      const usersRes = await axios.get(`${API_BASE_URL}/admin/users`, config);
      setUsers(usersRes.data);

      const bookingsRes = await axios.get(`${API_BASE_URL}/admin/bookings`, config);
      setBookings(bookingsRes.data);

      const statsRes = await axios.get(`${API_BASE_URL}/admin/stats`, config);
      setStats(statsRes.data);

    } catch (error) {
      console.error('Error fetching data:', error);
      if (error.response?.status === 401) {
        alert('Session expired. Please login again.');
        navigate('/login');
      } else if (error.response?.status === 403) {
        alert('Access denied. Admin privileges required.');
        navigate('/');
      }
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    if (loading) return <div className="loading">Loading dashboard...</div>;

    switch (activeTab) {
      case 'dashboard':
        return <AdminStats stats={stats} users={users} bookings={bookings} />;
      case 'users':
        return <AdminUsers users={users} onRefresh={fetchAllData} />;
      case 'bookings':
        return <AdminBookings bookings={bookings} onRefresh={fetchAllData} />;
      case 'settings':
        return <AdminSettings onRefresh={fetchAllData} />;
      default:
        return <AdminStats stats={stats} users={users} bookings={bookings} />;
    }
  };

  return (
    <div className="admin-dashboard-content">
      <div className="admin-tabs">
        <button 
          className={`tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={`tab-btn ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          Users ({users.length})
        </button>
        <button 
          className={`tab-btn ${activeTab === 'bookings' ? 'active' : ''}`}
          onClick={() => setActiveTab('bookings')}
        >
          Bookings ({bookings.length})
        </button>
        <button 
          className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
      </div>

      {renderContent()}
    </div>
  );
}

export default AdminDashboard;