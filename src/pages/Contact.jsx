import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaClock } from 'react-icons/fa';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">We're here to help you find your perfect stay</p>
      </div>

      <div className="contact-content">
        <div className="contact-section">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Have questions about booking? Need help with your reservation? Our team is ready to assist you 24/7.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-text">
                  <h3>Phone Support</h3>
                  <p>+91 1800-123-4567</p>
                  <p className="contact-note">Available 24/7 for urgent bookings</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h3>Email Us</h3>
                  <p>support@staysearch.com</p>
                  <p className="contact-note">Response within 2-4 hours</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaClock />
                </div>
                <div className="contact-text">
                  <h3>Business Hours</h3>
                  <p>Monday - Sunday: 24/7</p>
                  <p className="contact-note">365 days a year</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <h3>Head Office</h3>
                  <p>StaySearch Headquarters</p>
                  <p>Bangalore, Karnataka, India - 560001</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your accommodation needs..."
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="contact-section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            <div className="faq-item">
              <h3>How do I book accommodation?</h3>
              <p>Simply search for your destination, select dates, choose from hostels, PGs, or lodges, and complete the booking process with secure payment.</p>
            </div>
            
            <div className="faq-item">
              <h3>Are all listings verified?</h3>
              <p>Yes, we verify every hostel, PG, and lodge listing on our platform to ensure safety and quality standards.</p>
            </div>
            
            <div className="faq-item">
              <h3>Can I cancel my booking?</h3>
              <p>Cancellation policies vary by property. Check the specific cancellation policy before booking. Most properties offer free cancellation within 24 hours.</p>
            </div>
            
            <div className="faq-item">
              <h3>What payment methods are accepted?</h3>
              <p>We accept all major credit/debit cards, UPI, net banking, and digital wallets for secure payments.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;