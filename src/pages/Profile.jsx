import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/profile.css';

function Profile() {
  const navigate = useNavigate();

  // UI state for switching between tabs
  const [activeTab, setActiveTab] = useState('bookings');

  // Stores booking history fetched from backend
  const [bookingHistory, setBookingHistory] = useState([]);

  // Stores logged-in user's personal information
  const [userInfo, setUserInfo] = useState({});

  // Loading states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // User ID is stored in localStorage after booking/login
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    // Do not call APIs if userId is missing
    if (!userId) return;

    setLoading(true);
    
    // Fetch user personal information
    axios
      .get(`https://staysearch-api.onrender.com/api/staysearch/users/${userId}`)
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.error('User API error:', err);
        setError('Failed to load user information');
      });

    // ✅ FIXED: Correct API endpoint with https:// and correct path
    axios
      .get(`https://staysearch-api.onrender.com/api/staysearch/bookings/user/${userId}`)
      .then((res) => {
        // ✅ Ensure response data is an array
        if (Array.isArray(res.data)) {
          setBookingHistory(res.data);
        } else {
          console.warn('Bookings API returned non-array:', res.data);
          setBookingHistory([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Booking API error:', err);
        setBookingHistory([]);
        setError('Failed to load booking history');
        setLoading(false);
      });

  }, [userId]);

  // Clears session data and redirects user to home
  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    navigate('/');
  };

  // If user is not logged in, block profile access
  if (!userId) {
    return (
      <div className="not-logged-in">
        <h1>Profile Access</h1>
        <p>You need to make a booking first to access your profile.</p>
        <button onClick={() => navigate('/')} className="home-btn">
          Go to Home
        </button>
      </div>
    );
  }

  // Utility function to generate initials for avatar
  const getInitials = (name) =>
    name ? name.split(' ').map(n => n[0]).join('').toUpperCase() : 'U';

  // Renders booking history section
  const renderBookings = () => {
    if (loading) {
      return <div className="loading-state">Loading bookings...</div>;
    }

    if (error) {
      return <div className="error-state">{error}</div>;
    }

    // ✅ Safety check for array
    if (!Array.isArray(bookingHistory) || bookingHistory.length === 0) {
      return (
        <div className="empty-state">
          <h3>No Bookings Yet</h3>
          <p>Make your first booking to see it here!</p>
        </div>
      );
    }

    return (
      <div className="booking-history">
        {bookingHistory.map((booking, index) => (
          <div key={booking.id || index} className="booking-card">
            <div className="booking-header">
              Booking ID: {booking.id || booking.bookingCode}
              <span className={`booking-status status-${(booking.status || 'pending').toLowerCase()}`}>
                {booking.status || 'PENDING'}
              </span>
            </div>

            <div className="booking-details">
              <div>Property: {booking.propertyType || 'N/A'}</div>
              <div>Room: {booking.roomType || 'N/A'}</div>
              <div>Branch: {booking.branch || 'N/A'}</div>
              <div>Check-in: {booking.checkIn || 'N/A'}</div>
              <div>Duration: {booking.duration || 'N/A'} month(s)</div>
              <div>Amount: ₹{booking.amount || '0'}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Renders personal information section
  const renderPersonalInfo = () => (
    <div className="personal-info">
      <div><strong>Name:</strong> {userInfo.name || 'N/A'}</div>
      <div><strong>Email:</strong> {userInfo.email || 'N/A'}</div>
      <div><strong>Phone:</strong> {userInfo.phone || 'N/A'}</div>
      <div><strong>Address:</strong> {userInfo.address || 'N/A'}</div>
    </div>
  );

  return (
    <div className="profile-container">
      {/* Sidebar with user details */}
      <div className="profile-sidebar">
        <div className="profile-avatar">
          {getInitials(userInfo.name)}
        </div>
        <h2>{userInfo.name || 'User'}</h2>
        <p>{userInfo.email || 'No email'}</p>

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>

      {/* Main content area */}
      <div className="profile-main">
        <div className="profile-tabs">
          <button 
            className={activeTab === 'bookings' ? 'active' : ''}
            onClick={() => setActiveTab('bookings')}
          >
            My Bookings
          </button>
          <button 
            className={activeTab === 'personal' ? 'active' : ''}
            onClick={() => setActiveTab('personal')}
          >
            Personal Info
          </button>
        </div>

        {activeTab === 'bookings' && renderBookings()}
        {activeTab === 'personal' && renderPersonalInfo()}
      </div>
    </div>
  );
}

export default Profile;