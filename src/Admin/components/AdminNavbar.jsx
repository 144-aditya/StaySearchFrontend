import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaHome, FaUser, FaBell } from 'react-icons/fa';
import '../styles/admin-navbar.css';

function AdminNavbar() {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  };

  return (
    <nav className="admin-navbar">
      <div className="admin-navbar-container">
        <div className="admin-navbar-logo">
          <h2>Admin Panel</h2>
        </div>
        
        <div className="admin-navbar-menu">
          <button className="nav-icon" onClick={() => navigate('/')}>
            <FaHome />
          </button>
          <button className="nav-icon">
            <FaBell />
          </button>
          <div className="admin-user-info">
            <div className="admin-avatar">
              {userName?.charAt(0).toUpperCase() || 'A'}
            </div>
            <span>{userName?.split(' ')[0] || 'Admin'}</span>
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;