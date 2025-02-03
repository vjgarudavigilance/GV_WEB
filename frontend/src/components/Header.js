import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import vnrlogo from '../assets/vnrlogo.jpg.png';
import gvlogo from "../assets/logo.jpg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for mobile sidebar
  const location = useLocation(); // Hook to get the current location
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to handle dropdown

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-row">
        <div className="logo-section">
            <a href="https://vnrvjiet.ac.in/" target="_blank" rel="noopener noreferrer">
            <img src={vnrlogo} alt="VNRVJIET" className="logo" />
            </a>
      <span className="logo-text">VNRVJIET Hyderabad</span>
        </div>

          <div className="hamburger" onClick={toggleSidebar}>
            ☰
          </div>
          <div className="logo-section right-logo">
  <span className="logo-text">VJ Garuda Vigilance   </span>
  <a href="/">
    <img src={gvlogo} alt="gvlogo" className="logo" />
  </a>
</div>

        </div>
        <nav className="nav-links">
          <ul>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/events" className={location.pathname === '/events' ? 'active' : ''}>Events</Link></li>
            <li><Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link></li>
            <li><Link to="/achievements" className={location.pathname === '/achievements' ? 'active' : ''}>Cyber Insights</Link></li>
            <li><Link to="/alumni" className={location.pathname === '/alumni' ? 'active' : ''}>Alumni</Link></li>
            <li
              className="dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                to="#"
                className={`dropdown-link ${dropdownOpen ? 'active' : ''}`}
              >
                About Us
              </Link>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Club</Link></li>
                  <li><Link to="/teams" className={location.pathname === '/teams' ? 'active' : ''}>Teams</Link></li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </header>

      {/* Sidebar for Mobile */}
      <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/events" onClick={toggleSidebar}>Events</Link></li>
          <li><Link to="/gallery" onClick={toggleSidebar}>Gallery</Link></li>
          <li><Link to="/achievements" onClick={toggleSidebar}>Achievements</Link></li>
          <li><Link to="/alumni" onClick={toggleSidebar}>Alumni</Link></li>
          <li><Link to="/about" onClick={toggleSidebar}>About Club</Link></li>
          <li><Link to="/teams" onClick={toggleSidebar}>Teams</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Header;
