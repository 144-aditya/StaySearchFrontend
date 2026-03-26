import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  FaChartBar, 
  FaUsers, 
  FaBook, 
  FaCog, 
  FaSignOutAlt, 
  FaHome 
} from 'react-icons/fa';
import '../styles/admin.css';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const userName = localStorage.getItem('userName');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FaChartBar />, path: '/admin' },
    { id: 'users', label: 'Users', icon: <FaUsers />, path: '/admin/users' },
    { id: 'bookings', label: 'Bookings', icon: <FaBook />, path: '/admin/bookings' },
    { id: 'settings', label: 'Settings', icon: <FaCog />, path: '/admin/settings' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const isActive = (path) => {
    if (path === '/admin' && location.pathname === '/admin') return true;
    if (path !== '/admin' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
        <p>Welcome, {userName?.split(' ')[0] || 'Admin'}</p>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="nav-item" onClick={handleBackToHome}>
          <FaHome />
          <span>Back to Home</span>
        </button>
        <button className="nav-item logout" onClick={handleLogout}>
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;