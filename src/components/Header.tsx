import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/Header.css';
import logo from '../components/public/logo.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle scroll effect for sticky header
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Handle click outside to close the menu
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="logo" width="100" height="50" />
        </div>

        {/* Hamburger Menu */}
        <div className="mobile-menu-button" onClick={toggleMenu}>
          {isMenuOpen ? <X size={30} color="#fff" /> : <Menu size={30} color="#fff" />}
        </div>

        {/* Navigation Links */}
        <nav 
          className={`nav-links ${isMenuOpen ? 'open' : ''}`}
          ref={menuRef}
        >
          <ul>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
            <li><a href="#expertise" onClick={() => setIsMenuOpen(false)}>Expertise</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
