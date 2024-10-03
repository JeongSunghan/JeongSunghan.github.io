import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Footer.css'; 
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* 상단 네비 */}
      <div className="footer-nav">
        <Link to="/" className="footer-link">
          <span className="arrow">←</span> Home
        </Link>
        <Link to="/Contact" className="footer-link">
          Contact <span className="arrow">→</span>
        </Link>
      </div>

      {/* 하단 개인 정보 및 소셜 링크 */}
      <div className="footer-info">
        <div className="footer-text">
          <p><strong>Name:</strong> 정성한</p>
          <p><strong>Phone:</strong> 010-2407-5930</p>
          <p><strong>Email:</strong> sh2683@naver.com</p>
        </div>
        <div className="footer-social">
          <a href="https://github.com/JeongSunghan" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
