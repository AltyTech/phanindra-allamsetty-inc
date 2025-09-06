import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Phanindra Allamsetty Inc</h3>
            <p>Innovative software development and AI solutions for the modern world.</p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">🔗</a>
              <a href="#" aria-label="GitHub">💻</a>
              <a href="#" aria-label="Twitter">🐦</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Software Development</a></li>
              <li><a href="#services">AI Solutions</a></li>
              <li><a href="#services">Web Applications</a></li>
              <li><a href="#services">Mobile Development</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📧 contact@phanindra-allamsetty.com</p>
            <p>📞 +1 (234) 567-8900</p>
            <p>🏢 Software Development & AI Solutions</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Phanindra Allamsetty Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
