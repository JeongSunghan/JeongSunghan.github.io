import React from 'react';
import { Typography} from '@mui/material';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-section">
        <img src="https://via.placeholder.com/100" alt="Profile" className="profile-pic" />
        <h2>Jeong Sunghan</h2>                
        <Typography sx ={{ mb: 2, mt: 2}}>Junior Developer</Typography>                        
      </div>
      <nav className="nav-links">
        <NavLink to="/" className="nav-item" activeClassName="active" exact>
          Home
        </NavLink>
        <NavLink to="/about" className="nav-item" activeClassName="active">
          About Me
        </NavLink>
        <NavLink to="/skills" className="nav-item" activeClassName="active">
          Skills
        </NavLink>
        <NavLink to="/projects" className="nav-item" activeClassName="active">
          Projects
        </NavLink>
        <NavLink to="/contact" className="nav-item" activeClassName="active">
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
