import React from 'react';
import { FaHotel, FaHome, FaBuilding, FaSearch, FaShieldAlt, FaCreditCard, FaStar } from 'react-icons/fa';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1 className="about-title">About StaySearch</h1>
        <p className="about-subtitle">Your One-Stop Solution for All Accommodation Needs</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <div className="about-card">
            <div className="about-icon">
              <FaSearch size={40} />
            </div>
            <h2>Our Mission</h2>
            <p>
              At StaySearch, we revolutionize how you find and book accommodations. 
              We bring hostels, PGs (Paying Guest), and lodges together on a single platform, 
              making your search for the perfect stay effortless and efficient.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">
              <FaHotel size={40} />
            </div>
            <h2>What We Offer</h2>
            <ul className="about-features">
              <li><FaHotel className="feature-icon" /> <strong>Hostels</strong> - Budget-friendly stays for students and backpackers</li>
              <li><FaHome className="feature-icon" /> <strong>PG Accommodations</strong> - Comfortable living with meal options</li>
              <li><FaBuilding className="feature-icon" /> <strong>Lodges</strong> - Short-term stays for travelers and professionals</li>
            </ul>
          </div>
        </div>

        <div className="about-section">
          <h2 className="section-title">Why Choose StaySearch?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <FaShieldAlt className="feature-icon" />
              <h3>Verified Listings</h3>
              <p>All accommodations are thoroughly verified for your safety</p>
            </div>
            
            <div className="feature-card">
              <FaCreditCard className="feature-icon" />
              <h3>Easy Booking</h3>
              <p>Secure online booking with multiple payment options</p>
            </div>
            
            <div className="feature-card">
              <FaStar className="feature-icon" />
              <h3>Real Reviews</h3>
              <p>Genuine reviews from previous guests</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Search</h3>
              <p>Enter your destination and dates</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Compare</h3>
              <p>View hostels, PGs, and lodges side by side</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Book</h3>
              <p>Select your preferred accommodation and book instantly</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Stay</h3>
              <p>Enjoy your comfortable stay with peace of mind</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;