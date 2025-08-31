import React from 'react';
import { useNavigate } from 'react-router-dom';  
import '../styles/Contact.css';  
// import contacimage from '../assets/image/contactProfile.jpg';

const Contact = () => {
  const navigate = useNavigate();  

  const home = () => {
    navigate('/');  
  };

  return (
    <div className="contact-container">
      <div className="contact-image">
        <img 
          // src={contacimage} 
          alt="Profile" 
          onClick={home}  
        />
      </div>
      <div className="contact-details">
        <h2>Contact Me</h2>
        <h3>Jeong Seong Han</h3>
        <div className="contact-info">
          <p>
            <span className="icon">✉️</span>
            sh2683@naver.com
          </p>
          <p>
            <span className="icon">📞</span>
            010.2407.4389
          </p>
        </div>
        <footer className="footer">
          <p>© Han's REACT PORTFOLIO 2024</p>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
