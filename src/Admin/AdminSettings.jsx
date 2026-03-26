import React, { useState } from 'react';
import axios from 'axios';
import './styles/admin-settings.css';

const API_BASE_URL = 'http://localhost:8080/api';

function AdminSettings({ onRefresh }) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return;
    }
    
    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    setLoading(true);
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    
    try {
      await axios.put(
        `${API_BASE_URL}/users/${userId}/password`,
        { currentPassword, newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('✅ Password changed successfully!');
      setError('');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to change password');
      setMessage('');
    } finally {
      setLoading(false);
    }
  };

  const userName = localStorage.getItem('userName');
  const userEmail = localStorage.getItem('userEmail');

  return (
    <div className="admin-settings-container">
      <div className="settings-card">
        <h3>Profile Information</h3>
        <div className="info-item">
          <span>Name:</span>
          <strong>{userName || 'Admin User'}</strong>
        </div>
        <div className="info-item">
          <span>Email:</span>
          <strong>{userEmail || 'admin@staysearch.com'}</strong>
        </div>
        <div className="info-item">
          <span>Role:</span>
          <strong className="role-badge admin">ADMIN</strong>
        </div>
      </div>

      <div className="settings-card">
        <h3>Change Password</h3>
        <form onSubmit={handleChangePassword}>
          <div className="form-group">
            <label>Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          
          {message && <div className="success-message">{message}</div>}
          {error && <div className="error-message">{error}</div>}
          
          <button type="submit" className="save-btn" disabled={loading}>
            {loading ? 'Updating...' : 'Update Password'}
          </button>
        </form>
      </div>
      
      <div className="settings-card">
        <h3>System Information</h3>
        <div className="info-item">
          <span>Version:</span>
          <strong>1.0.0</strong>
        </div>
        <div className="info-item">
          <span>Environment:</span>
          <strong>Production</strong>
        </div>
        <div className="info-item">
          <span>Last Updated:</span>
          <strong>{new Date().toLocaleDateString()}</strong>
        </div>
        <div className="info-item">
          <span>API Base URL:</span>
          <strong>{API_BASE_URL}</strong>
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;