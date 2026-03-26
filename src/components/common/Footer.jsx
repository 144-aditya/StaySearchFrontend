import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="footer-section footer-about">
          <h3>About StaySearch</h3>
          <p>Your perfect accommodation solution. We provide comfortable and affordable PGs, hostels, and lodges with premium facilities.</p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        
        {/* Links */}
        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/"><i className="fas fa-chevron-right"></i> Home</Link></li>
            <li><Link to="/pg"><i className="fas fa-chevron-right"></i> PGs</Link></li>
            <li><Link to="/hostel"><i className="fas fa-chevron-right"></i> Hostels</Link></li>
            <li><Link to="/lodge"><i className="fas fa-chevron-right"></i> Lodges</Link></li>
            <li><Link to="/about"><i className="fas fa-chevron-right"></i> About Us</Link></li>
            <li><Link to="/contact"><i className="fas fa-chevron-right"></i> Contact</Link></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div className="footer-section footer-contact">
          <h3>Contact Us</h3>
          <p><i className="fas fa-map-marker-alt"></i> 123 Street, Delhi, India</p>
          <p><i className="fas fa-phone"></i> <a href="tel:+911234567890">+916206798107</a></p>
          <p><i className="fas fa-envelope"></i> <a href="mailto:info@dreamhome.com">info@StaySearch.com</a></p>
          <p><i className="fas fa-clock"></i> Mon - Sat: 9:00 AM - 8:00 PM</p>
        </div>
        
        {/* Newsletter */}
        <div className="footer-section footer-newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to get updates on new properties and special offers.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              className="newsletter-input" 
              placeholder="Your email address" 
              required 
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
          <p className="privacy-text">We respect your privacy. Unsubscribe at any time.</p>
        </div>
        
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} DreamHome. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/cookies">Cookie Policy</Link>
          <Link to="/sitemap">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;