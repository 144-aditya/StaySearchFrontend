// src/Admin/AdminBookings.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTimesCircle, FaSync } from 'react-icons/fa';
import './styles/admin-bookings.css';

function AdminBookings({ bookings = [], onRefresh }) {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [localBookings, setLocalBookings] = useState([]);

  // Debug: Log when bookings prop changes
  useEffect(() => {
    console.log('📦 AdminBookings - Received bookings:', bookings);
    console.log('📊 Total bookings count:', bookings?.length);
    
    if (bookings && bookings.length > 0) {
      console.log('✅ Sample booking:', bookings[0]);
      setLocalBookings(bookings);
    } else {
      console.log('⚠️ No bookings received');
      setLocalBookings([]);
    }
  }, [bookings]);

  const filteredBookings = localBookings.filter(booking => {
    const matchesFilter = filter === 'all' || booking.status?.toLowerCase() === filter;
    const matchesSearch = 
      booking.bookingCode?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.propertyType?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleCancelBooking = async (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      setLoading(true);
      const token = localStorage.getItem('token');
      
      try {
        await axios.put(
          `https://staysearch-api.onrender.com/api/staysearch/bookings/${bookingId}/cancel`,
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
        
        alert('✅ Booking cancelled successfully!');
        if (onRefresh) onRefresh();
        
      } catch (error) {
        console.error('Error cancelling booking:', error);
        alert(error.response?.data?.message || 'Failed to cancel booking');
      } finally {
        setLoading(false);
      }
    }
  };

  const getStatusBadgeClass = (status) => {
    switch(status?.toLowerCase()) {
      case 'confirmed': return 'status-badge confirmed';
      case 'pending': return 'status-badge pending';
      case 'cancelled': return 'status-badge cancelled';
      default: return 'status-badge';
    }
  };

  // Show loading or empty state
  if (!localBookings || localBookings.length === 0) {
    return (
      <div className="admin-bookings-container">
        <div className="bookings-header">
          <h2 className="page-title">Booking Management</h2>
          <button className="refresh-btn" onClick={onRefresh}>
            <FaSync /> Refresh
          </button>
        </div>
        <div className="empty-state">
          <p>📭 No bookings found</p>
          <p>Total bookings in props: {bookings?.length || 0}</p>
          <p>Click refresh to try again.</p>
        </div>
      </div>
    );
  }

  const confirmedCount = localBookings.filter(b => b.status === 'CONFIRMED').length;
  const pendingCount = localBookings.filter(b => b.status === 'PENDING').length;
  const cancelledCount = localBookings.filter(b => b.status === 'CANCELLED').length;

  return (
    <div className="admin-bookings-container">
      <div className="bookings-header">
        <h2 className="page-title">Booking Management</h2>
        <div className="header-actions">
          <span className="booking-count">Total: {localBookings.length} bookings</span>
          <button className="refresh-btn" onClick={onRefresh}>
            <FaSync /> Refresh
          </button>
        </div>
        <div className="filters">
          <div className="filter-buttons">
            <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
              All ({localBookings.length})
            </button>
            <button className={filter === 'confirmed' ? 'active' : ''} onClick={() => setFilter('confirmed')}>
              Confirmed ({confirmedCount})
            </button>
            <button className={filter === 'pending' ? 'active' : ''} onClick={() => setFilter('pending')}>
              Pending ({pendingCount})
            </button>
            <button className={filter === 'cancelled' ? 'active' : ''} onClick={() => setFilter('cancelled')}>
              Cancelled ({cancelledCount})
            </button>
          </div>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by code, user or property..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="bookings-table-container">
        <table className="bookings-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Booking Code</th>
              <th>User</th>
              <th>Property</th>
              <th>Room</th>
              <th>Branch</th>
              <th>Check In</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map(booking => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td><span className="booking-code">{booking.bookingCode || 'N/A'}</span></td>
                <td>{booking.user?.name || booking.userName || 'N/A'}</td>
                <td>{booking.propertyType || 'N/A'}</td>
                <td>{booking.roomType || 'N/A'}</td>
                <td>{booking.branch || booking.branchName || 'N/A'}</td>
                <td>{booking.checkIn || booking.checkInDate || 'N/A'}</td>
                <td>₹{booking.amount || 0}</td>
                <td>
                  <span className={getStatusBadgeClass(booking.status)}>
                    {booking.status || 'PENDING'}
                  </span>
                </td>
                <td className="table-actions">
                  {booking.status !== 'CANCELLED' && (
                    <button 
                      className="action-btn cancel"
                      onClick={() => handleCancelBooking(booking.id)}
                      disabled={loading}
                    >
                      <FaTimesCircle /> Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredBookings.length === 0 && (
          <div className="empty-state">
            <p>No bookings match your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminBookings;