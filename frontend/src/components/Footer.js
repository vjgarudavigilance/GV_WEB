import React from 'react';
import './Footer.css'; // Import the CSS file
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div>
          <h3>VJ GURADA VIGILANCE</h3>
          <p>CONTACT</p>
          <p>VNR VJIET, B-Block</p>
          <p>Pragathi Nagar, Nizampet, Hyderabad - 500090, Telangana, India</p>
          <p>Mobile: +91 80085 48481</p>
          <p>Email: GVCLUB@gmail.com</p>
        </div>
        Vignana Jyothi Nagar,Pragathi Nagar, Nizampet S.O, Hyderabad, Telangana 500090
        <div>
          <h3>USEFUL LINKS</h3>
          <ul>
            {['About', 'Team'].map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>

        
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          COPYRIGHT ©VJ Garuda Vigilance VNRVJIET ALL RIGHTS RESERVED.
        </p>
        <div className="social-media-icons">
          <a href="https://www.instagram.com/vjgarudavigilance?igsh=MW9nd3hleTczY3h3YQ==" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/vj-garuda-vigilance/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:vjgarudavigilance@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-google"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;