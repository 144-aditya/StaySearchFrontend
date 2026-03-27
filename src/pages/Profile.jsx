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

  // User ID is stored in localStorage after booking/login
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    // Do not call APIs if userId is missing
    if (!userId) return;

    // Fetch user personal information
    axios
      .get(`staysearch-fullstack-backend-production.up.railway.app/api/staysearch/users/${userId}`)
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.error('User API error:', err);
      });

    // Fetch booking history for the user
    axios
      .get(`staysearch-fullstack-backend-production.up.railway.app/api/staysearch/bookings/user/${userId}`)
      .then((res) => {
        setBookingHistory(res.data);
      })
      .catch((err) => {
        console.error('Booking API error:', err);
      });

  }, [userId]);

  // Clears session data and redirects user to home
  const handleLogout = () => {
    localStorage.removeItem('userId');
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
    if (bookingHistory.length === 0) {
      return (
        <div className="empty-state">
          <h3>No Bookings Yet</h3>
        </div>
      );
    }

    return (
      <div className="booking-history">
        {bookingHistory.map((booking, index) => (
          <div key={index} className="booking-card">
            <div className="booking-header">
              Booking ID: {booking.id}
              <span className="booking-status status-confirmed">
                {booking.status}
              </span>
            </div>

            <div className="booking-details">
              <div>Property: {booking.propertyType}</div>
              <div>Room: {booking.roomType}</div>
              <div>Branch: {booking.branch}</div>
              <div>Check-in: {booking.checkIn}</div>
              <div>Duration: {booking.duration} month(s)</div>
              <div>Amount: ₹{booking.amount}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Renders personal information section
  const renderPersonalInfo = () => (
    <div className="personal-info">
      <div>Name: {userInfo.name}</div>
      <div>Email: {userInfo.email}</div>
      <div>Phone: {userInfo.phone}</div>
      <div>Address: {userInfo.address}</div>
    </div>
  );

  return (
    <div className="profile-container">
      {/* Sidebar with user details */}
      <div className="profile-sidebar">
        <div className="profile-avatar">
          {getInitials(userInfo.name)}
        </div>
        <h2>{userInfo.name}</h2>
        <p>{userInfo.email}</p>

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>

      {/* Main content area */}
      <div className="profile-main">
        <div className="profile-tabs">
          <button onClick={() => setActiveTab('bookings')}>
            My Bookings
          </button>
          <button onClick={() => setActiveTab('personal')}>
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
