import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HamburgerMenu.css';

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button 
        className={`hamburger-button ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="menu-backdrop" 
          onClick={toggleMenu}
        ></div>
      )}

      {/* Slide Menu */}
      <nav className={`slide-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-content">
          <Link to="/about" className="menu-link">About</Link>
          <Link to="/projects" className="menu-link">Projects</Link>
          <Link to="/certifications" className="menu-link">Certifications</Link>
          <Link to="/resume" className="menu-link">Resume</Link>
        </div>
      </nav>
    </>
  );
};

export default HamburgerMenu;
