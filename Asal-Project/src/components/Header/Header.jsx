import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './Header.css'; 
import logoImage from '../../assets/png-photos/user.png';
import homeImage from '../../assets/png-photos/home.png';
import profileImage from '../../assets/png-photos/profile-user.png';
import contactImage from '../../assets/png-photos/contact-us.png';
import skillsImage from '../../assets/png-photos/solution.png';
import Project from '../../assets/png-photos/projectt.png';


const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header"> 
      <div className="logo">
        Portfolio
        <img src={logoImage} alt="Hamayel Logo" id="img-logo"/>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">{t('header.home')}</Link>
            <img src={homeImage} alt={t('header.home')} />
          </li>
          <li>
            <Link to="/AboutMe">{t('header.aboutMe')}</Link>
            <img src={profileImage} alt={t('header.aboutMe')} />
          </li>
          <li>
            <Link to="/projects">{t('header.projects')}</Link>
            <img src={Project} alt={t('header.projects')} />
          </li>
          <li>
            <Link to="/contact">{t('header.contact')}</Link>
            <img src={contactImage} alt={t('header.contact')} />
          </li>
          <li>
            <Link to="/skills">{t('header.skills')}</Link>
            <img src={skillsImage} alt={t('header.skills')} />
          </li>
        </ul>
      </nav>
 
    </header>
  );
};

export default Header;
