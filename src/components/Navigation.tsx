import React from 'react';
import { Link } from 'react-router-dom';
import Moon from './Moon';
import HamburgerMenu from './HamburgerMenu';
import './Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="logo">
          <Moon />
        </Link>

        <div className="signature-center">
          <Link to="/">
            <img src="/signature_li.png" alt="Nikhil Boura" className="signature-image" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-links desktop-only">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/certifications">Certifications</Link>
          <Link to="/resume">Resume</Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="mobile-only">
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
