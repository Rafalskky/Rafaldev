import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Footer.sass';

import GithubIcon from '../images/icons/footer/github.svg';
import LinkedinIcon from '../images/icons/footer/linkedin.svg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-icons">
          <a href="https://github.com/Rafalskky" target="_blank" rel="noopener noreferrer">
            <img src={GithubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/rafal-chorazewicz-050886184/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedinIcon} alt="LinkedIn" />
          </a>
        </div>
        <ul className="footer-links">
          <li><Link to="/" onClick={scrollToTop}>Startsida</Link></li>
          <li>|</li>
          <li><Link to="/about" onClick={scrollToTop}>Om mig</Link></li>
          <li>|</li>
          <li><Link to="/my-projects" onClick={scrollToTop}>Mina projekt</Link></li>
          <li>|</li>
          <li><Link to="/kontakt" onClick={scrollToTop}>Kontakt</Link></li>
        </ul>
        <p>© 2024 Rafaldev All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
