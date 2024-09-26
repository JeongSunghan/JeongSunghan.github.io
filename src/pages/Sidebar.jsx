import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home as HomeIcon,
  Info as AboutIcon,
  Build as SkillsIcon,
  Work as ProjectsIcon,
  ContactMail as ContactIcon,
} from "@mui/icons-material";

import "../styles/Sidebar.css";
import "../styles/Responsive.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-section">
        <img src="image/sh_profile.jpg" alt="Profile" className="profile-pic" />
        <h2>Jeong Sunghan</h2>
        <h4>Junior Developer</h4>
      </div>

      {/* 프로필 링크 */}
      <nav className="nav-links">
        <NavLink to="/" className="nav-item">
          <HomeIcon />
          <span className="nav-text">Home</span>
        </NavLink>

        <NavLink to="/about" className="nav-item">
          <AboutIcon />
          <span className="nav-text">About Me</span>
        </NavLink>

        <NavLink to="/skills" className="nav-item">
          <SkillsIcon />
          <span className="nav-text">Skills</span>
        </NavLink>

        <NavLink to="/projects" className="nav-item">
          <ProjectsIcon />
          <span className="nav-text">Projects</span>
        </NavLink>

        <NavLink to="/contact" className="nav-item">
          <ContactIcon />
          <span className="nav-text">Contact</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
