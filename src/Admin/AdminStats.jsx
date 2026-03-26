import React from 'react';
import { FaUsers, FaBook, FaUserCog, FaCheckCircle } from 'react-icons/fa';
import './styles/admin-stats.css';

function AdminStats({ stats, users, bookings }) {
  const totalUsers = users?.length || 0;
  const totalBookings = bookings?.length || 0;
  const totalAdmins = users?.filter(u => u.role === 'ADMIN').length || 0;
  const confirmedBookings = bookings?.filter(b => b.status === 'CONFIRMED').length || 0;
  const pendingBookings = bookings?.filter(b => b.status === 'PENDING').length || 0;
  const cancelledBookings = bookings?.filter(b => b.status === 'CANCELLED').length || 0;

  const statsData = [
    { 
      icon: <FaUsers />, 
      title: 'Total Users', 
      value: totalUsers, 
      color: 'blue',
      trend: `${totalAdmins} Admins`
    },
    { 
      icon: <FaBook />, 
      title: 'Total Bookings', 
      value: totalBookings, 
      color: 'green',
      trend: `${confirmedBookings} Confirmed`
    },
    { 
      icon: <FaUserCog />, 
      title: 'Admin Users', 
      value: totalAdmins, 
      color: 'purple',
      trend: `${totalUsers - totalAdmins} Regular Users`
    },
    { 
      icon: <FaCheckCircle />, 
      title: 'Confirmed Bookings', 
      value: confirmedBookings, 
      color: 'orange',
      trend: `${pendingBookings} Pending, ${cancelledBookings} Cancelled`
    }
  ];

  return (
    <div className="admin-stats-container">
      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className={`stat-icon ${stat.color}`}>
              {stat.icon}
            </div>
            <div className="stat-info">
              <h3>{stat.title}</h3>
              <p>{stat.value}</p>
              {stat.trend && <span className="stat-trend">{stat.trend}</span>}
            </div>
          </div>
        ))}
      </div>

      <div className="stats-charts">
        <div className="chart-card">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            <p>📊 Total Registrations: {totalUsers}</p>
            <p>🏠 Total Bookings: {totalBookings}</p>
            <p>✅ Confirmed: {confirmedBookings}</p>
            <p>⏳ Pending: {pendingBookings}</p>
            <p>❌ Cancelled: {cancelledBookings}</p>
          </div>
        </div>
        
        <div className="chart-card">
          <h3>Booking Status Distribution</h3>
          <div className="status-distribution">
            <div className="status-item">
              <span className="status-label confirmed">Confirmed</span>
              <div className="status-bar">
                <div className="bar confirmed" style={{ width: `${(confirmedBookings / totalBookings) * 100 || 0}%` }}></div>
              </div>
              <span className="status-count">{confirmedBookings}</span>
            </div>
            <div className="status-item">
              <span className="status-label pending">Pending</span>
              <div className="status-bar">
                <div className="bar pending" style={{ width: `${(pendingBookings / totalBookings) * 100 || 0}%` }}></div>
              </div>
              <span className="status-count">{pendingBookings}</span>
            </div>
            <div className="status-item">
              <span className="status-label cancelled">Cancelled</span>
              <div className="status-bar">
                <div className="bar cancelled" style={{ width: `${(cancelledBookings / totalBookings) * 100 || 0}%` }}></div>
              </div>
              <span className="status-count">{cancelledBookings}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminStats;