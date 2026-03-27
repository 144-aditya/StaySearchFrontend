import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaSearch, FaHome, FaUser, FaInfoCircle, FaPhone, FaSignInAlt, FaUserPlus, FaSignOutAlt, FaTimes, FaUserCog } from 'react-icons/fa';
import "../../styles/global.css";

function Navbar() {
  const API_URL = "https://staysearch-fullstack-backend-production.up.railway.app/api";
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('userName');
    const role = localStorage.getItem('userRole');
    if (token) {
      setIsLoggedIn(true);
      setUserName(name);
      setUserRole(role);
    }
  }, []);

  const getInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('userRole');
      localStorage.removeItem('userName');
      setIsLoggedIn(false);
      setUserName('');
      setUserRole('');
      setMenuOpen(false);
      navigate('/');
    };

    const openPopup = (mode) => {
      setIsLoginMode(mode);
      setShowPopup(true);
      setError('');
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        confirmPassword: ''
      });
      setMenuOpen(false);
    };

    const closePopup = () => {
      setShowPopup(false);
    };

    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setError('');
    };

    const handleLogin = async (e) => {
  e.preventDefault();

  console.log("Navbar Login Data:", formData);

  try {
    const response = await axios.post('/api/auth/login', {
      email: formData.email.toLowerCase().trim(),
      password: formData.password
    });

    console.log("Navbar Login Response:", response.data);

    localStorage.setItem('token', response.data.token);
    localStorage.setItem('userRole', response.data.role);
    localStorage.setItem('userId', response.data.userId);
    localStorage.setItem('userName', response.data.name);

    if (response.data.role === 'ADMIN') {
      window.location.href = '/admin';
    } else {
      window.location.href = '/';
    }

  } catch (err) {
    console.log("FULL ERROR:", err);
    console.log("ERROR MESSAGE:", err.response?.data?.message);
  }
};
  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          password: formData.password,
          role: 'USER'
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('userRole', data.role);
        localStorage.setItem('userName', data.name);
        setIsLoggedIn(true);
        setUserName(data.name);
        setUserRole(data.role);
        closePopup();
        window.location.reload();
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBackgroundClick = (e) => {
    if (e.target.className === 'popup-overlay') {
      closePopup();
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <Link to="/" className="navbar-brand">
              <FaSearch className="navbar-icon" />
              <span className="navbar-logo-text">StaySearch</span>
            </Link>
          </div>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>

          <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
            <li className="navbar-item">
              <Link to="/" className="navbar-link" onClick={() => setMenuOpen(false)}>
                <FaHome className="navbar-link-icon" />
                <span>Home</span>
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/about" className="navbar-link" onClick={() => setMenuOpen(false)}>
                <FaInfoCircle className="navbar-link-icon" />
                <span>About</span>
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/contact" className="navbar-link" onClick={() => setMenuOpen(false)}>
                <FaPhone className="navbar-link-icon" />
                <span>Contact</span>
              </Link>
            </li>

            {/* Admin Panel - Only visible to ADMIN */}
            {userRole === 'ADMIN' && (
              <li className="navbar-item">
                <Link to="/admin" className="navbar-link" onClick={() => setMenuOpen(false)}>
                  <FaUserCog className="navbar-link-icon" />
                  <span>Admin Panel</span>
                </Link>
              </li>
            )}

            <li className="navbar-item profile-item">
              {isLoggedIn ? (
                <Link to="/profile" className="navbar-link profile-link" onClick={() => setMenuOpen(false)}>
                  <div className="profile-avatar-small">
                    {getInitials(userName)}
                  </div>
                  <span>{userName?.split(' ')[0] || 'Profile'}</span>
                </Link>
              ) : (
                <Link to="/profile" className="navbar-link profile-link" onClick={() => setMenuOpen(false)}>
                  <FaUser className="navbar-link-icon" />
                  <span>Profile</span>
                </Link>
              )}
            </li>

            {!isLoggedIn ? (
              <>
                <li className="navbar-item">
                  <button className="navbar-link auth-btn" onClick={() => openPopup(true)}>
                    <FaSignInAlt className="navbar-link-icon" />
                    <span>Login</span>
                  </button>
                </li>
                <li className="navbar-item">
                  <button className="navbar-link auth-btn" onClick={() => openPopup(false)}>
                    <FaUserPlus className="navbar-link-icon" />
                    <span>Register</span>
                  </button>
                </li>
              </>
            ) : (
              <li className="navbar-item">
                <button className="navbar-link logout-btn" onClick={handleLogout}>
                  <FaSignOutAlt className="navbar-link-icon" />
                  <span>Logout</span>
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={handleBackgroundClick}>
          <div className="popup-container">
            <button className="popup-close" onClick={closePopup}>
              <FaTimes />
            </button>
            
            <div className="popup-header">
              <h2>{isLoginMode ? 'Welcome Back' : 'Create Account'}</h2>
              <p>{isLoginMode ? 'Login to your account' : 'Register to get started'}</p>
            </div>
            
            {error && <div className="popup-error">{error}</div>}
            
            <form onSubmit={isLoginMode ? handleLogin : handleRegister} className="popup-form">
              {!isLoginMode && (
                <>
                  <div className="popup-form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="popup-form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="popup-form-group">
                    <textarea
                      name="address"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows="3"
                      required
                    />
                  </div>
                </>
              )}
              
              <div className="popup-form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="popup-form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              {!isLoginMode && (
                <div className="popup-form-group">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}
              
              <button type="submit" className="popup-btn" disabled={loading}>
                {loading ? (isLoginMode ? 'Logging in...' : 'Creating Account...') : (isLoginMode ? 'Login' : 'Register')}
              </button>
            </form>
            
            <p className="popup-footer">
              {isLoginMode ? "Don't have an account? " : "Already have an account? "}
              <span onClick={() => {
                setIsLoginMode(!isLoginMode);
                setError('');
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  address: '',
                  password: '',
                  confirmPassword: ''
                });
              }}>
                {isLoginMode ? 'Register' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;