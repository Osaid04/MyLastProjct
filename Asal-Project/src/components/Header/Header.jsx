import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'; 
import logoImage from '../../assets/png-photos/user.png';
import homeImage from '../../assets/png-photos/home.png';
import profileImage from '../../assets/png-photos/profile-user.png';
import contactImage from '../../assets/png-photos/contact-us.png';
import skillsImage from '../../assets/png-photos/solution.png';
import Project from '../../assets/png-photos/projectt.png';
const Header = () => {
  return (
    <header className="header"> 
      <div className="logo">
        Portfolio
        <img src={logoImage} alt="Hamayel Logo" />
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
            <img src={homeImage} alt="Home" />
          </li>
          <li>
            <Link to="/AboutMe">AboutMe</Link>
            <img src={profileImage} alt="Portfolio" />
          </li>
          <li>
            <Link to="/projects">Projects</Link>
            <img src={Project} alt="Portfolio" />
          </li>
          <li>
            <Link to="/contact">Contact</Link>
            <img src={contactImage} alt="Contact" />
          </li>
          <li>
            <Link to="/skills">Skills</Link>
            <img src={skillsImage} alt="Skills" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

