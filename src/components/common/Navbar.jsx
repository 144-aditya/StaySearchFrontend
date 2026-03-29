import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaSearch, FaHome, FaUser, FaInfoCircle, FaPhone, FaSignInAlt, FaUserPlus, FaSignOutAlt, FaTimes, FaUserCog } from 'react-icons/fa';
import "../../styles/global.css";

function Navbar() {
  const API_URL = "https://staysearch-api.onrender.com/api"; // Full backend URL

  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

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
    localStorage.clear();
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

  const closePopup = () => setShowPopup(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email: formData.email.toLowerCase().trim(),
        password: formData.password
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userRole', response.data.role);
      localStorage.setItem('userId', response.data.userId);
      localStorage.setItem('userName', response.data.name);
      setIsLoggedIn(true);
      setUserName(response.data.name);
      setUserRole(response.data.role);
      closePopup();

      if (response.data.role === 'ADMIN') window.location.href = '/admin';
      else window.location.href = '/';
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
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
      const response = await axios.post(`${API_URL}/auth/register`, {
        name: formData.name,
        email: formData.email.toLowerCase().trim(),
        phone: formData.phone,
        address: formData.address,
        password: formData.password,
        role: 'USER'
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.userId);
      localStorage.setItem('userRole', response.data.role);
      localStorage.setItem('userName', response.data.name);
      setIsLoggedIn(true);
      setUserName(response.data.name);
      setUserRole(response.data.role);
      closePopup();
      window.location.reload();
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const handleBackgroundClick = (e) => {
    if (e.target.className === 'popup-overlay') closePopup();
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

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

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
                  <div className="profile-avatar-small">{getInitials(userName)}</div>
                  <span>{userName?.split(' ')[0]}</span>
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

      {showPopup && (
        <div className="popup-overlay" onClick={handleBackgroundClick}>
          <div className="popup-container">
            <button className="popup-close" onClick={closePopup}><FaTimes /></button>
            <div className="popup-header">
              <h2>{isLoginMode ? 'Welcome Back' : 'Create Account'}</h2>
              <p>{isLoginMode ? 'Login to your account' : 'Register to get started'}</p>
            </div>
            {error && <div className="popup-error">{error}</div>}
            <form onSubmit={isLoginMode ? handleLogin : handleRegister} className="popup-form">
              {!isLoginMode && (
                <>
                  <div className="popup-form-group">
                    <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div className="popup-form-group">
                    <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} required />
                  </div>
                  <div className="popup-form-group">
                    <textarea name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} rows="3" required />
                  </div>
                </>
              )}
              <div className="popup-form-group">
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className="popup-form-group">
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
              </div>
              {!isLoginMode && (
                <div className="popup-form-group">
                  <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleInputChange} required />
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
                setFormData({ name:'', email:'', phone:'', address:'', password:'', confirmPassword:'' });
              }}>{isLoginMode ? 'Register' : 'Login'}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;