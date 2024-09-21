// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="profile-section">
                <img src="https://via.placeholder.com/100" alt="Profile" className="profile-pic" />
                <h2>정성한</h2>
                <h4>Junior Developer</h4>
                <div className="social-links">
                    <a href="#">About Me</a>
                    <a href="#">Instagram</a>
                    <a href="#">GitHub</a>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
