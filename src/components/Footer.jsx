import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section home">
        <Link to="/" className="footer-link">
          <span className="arrow">←</span> Home
        </Link>
      </div>      

      <div className="footer-section project">
        <Link to="/Contact" className="footer-link">
          Contact <span className="arrow">→</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
