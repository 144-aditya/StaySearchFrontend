import React, { useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './styles/admin-users.css';

const API_BASE_URL = 'https://staysearch-api.onrender.com/api';

function AdminUsers({ users = [], onRefresh }) {
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedRole, setSelectedRole] = useState('USER');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const filteredUsers = users.filter(user => 
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUpdateRole = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    
    try {
      await axios.put(
        `${API_BASE_URL}/admin/users/${selectedUser.id}/role`,
        { role: selectedRole },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      setShowRoleModal(false);
      alert(`✅ User role updated to ${selectedRole} successfully!`);
      if (onRefresh) onRefresh();
      
    } catch (error) {
      console.error('Error updating role:', error);
      alert(error.response?.data?.message || 'Failed to update user role');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      setLoading(true);
      const token = localStorage.getItem('token');
      
      try {
        await axios.delete(`${API_BASE_URL}/admin/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        alert('✅ User deleted successfully!');
        if (onRefresh) onRefresh();
        
      } catch (error) {
        console.error('Error deleting user:', error);
        alert(error.response?.data?.message || 'Failed to delete user');
      } finally {
        setLoading(false);
      }
    }
  };

  const getRoleBadgeClass = (role) => {
    return role === 'ADMIN' ? 'role-badge admin' : 'role-badge user';
  };

  return (
    <div className="admin-users-container">
      <div className="users-header">
        <h2 className="page-title">User Management</h2>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Registered</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <div className="user-name">
                    <div className="user-avatar">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>
                    {user.name}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <span className={getRoleBadgeClass(user.role)}>
                    {user.role}
                  </span>
                </td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                <td className="table-actions">
                  <button 
                    className="action-btn edit"
                    onClick={() => {
                      setSelectedUser(user);
                      setSelectedRole(user.role);
                      setShowRoleModal(true);
                    }}
                    disabled={loading}
                  >
                    <FaEdit /> Edit Role
                  </button>
                  <button 
                    className="action-btn delete"
                    onClick={() => handleDeleteUser(user.id)}
                    disabled={loading}
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredUsers.length === 0 && (
          <div className="empty-state">
            <p>No users found matching your search.</p>
          </div>
        )}
      </div>

      {showRoleModal && selectedUser && (
        <div className="modal-overlay" onClick={() => setShowRoleModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Update User Role</h3>
            <p>User: <strong>{selectedUser.name}</strong></p>
            <div className="form-group">
              <label>Select Role:</label>
              <select 
                value={selectedRole} 
                onChange={(e) => setSelectedRole(e.target.value)}
                className="role-select"
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowRoleModal(false)}>
                Cancel
              </button>
              <button className="btn-confirm" onClick={handleUpdateRole} disabled={loading}>
                {loading ? 'Updating...' : 'Update'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminUsers;