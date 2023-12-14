import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.scss';
import axios from 'axios';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showLinkContainer, setShowLinkContainer] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');


  useEffect(() => {
    const user = sessionStorage.getItem('user');
    const name = sessionStorage.getItem('userName');
    if (user) {
      setIsLoggedIn(true);
      console.log(setIsLoggedIn)
      setUserName(name || '');
    }
  }, []);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
    setShowLinkContainer(!showLinkContainer);
  };

  const closeLinks = () => {
    setShowLinks(false);
    setShowLinkContainer(false);
  };

  const closeLinkContainer = () => {
    setShowLinkContainer(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Handle logout logic (clear session, etc.)
    sessionStorage.clear();
    setIsLoggedIn(false);
    setUserName('');
    setShowDropdown(false);
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to='/'>
          <img src="images/logo.png" alt="logo-placeholder" />
        </Link>
      </div>

      {/* Burger menu icon */}
      <div className={`burger-menu ${showLinks ? 'show' : ''}`} onClick={toggleLinks}>
        <div></div>
        <div id='middle'></div>
        <div></div>
      </div>

      {/* Regular links */}
      <div className={`link ${showLinks ? 'show' : ''}`}>
        <Link to='/'>Home</Link>
        <Link to='/Product'>Product</Link>
        <Link to='/Company'>Company</Link>
        <Link to='/Contact'>Contact</Link>
        <Link id='navbarButton' to='/AirMap'>AirMap</Link>
        <div className="dropdown-btn" onClick={toggleDropdown}>
          <button id='profil'>{isLoggedIn ? userName : ''}</button>
        </div>
          {/* Dropdown content */}
          {showDropdown && (
            <div className="dropdown-content">
              <Link to='/Profile' onClick={toggleDropdown}>Profile</Link>
              <Link to='/Guidedk' onClick={toggleDropdown}>Guide</Link>
              {isLoggedIn ? (
                <>
                  <Link to='/Profile' onClick={toggleDropdown}>Profile</Link>
                  <Link to='/Guidedk' onClick={toggleDropdown}>Guide</Link>
                  <button onClick={handleLogout}>Logout</button>
                </>
              ) : (
                
                <Link to='/signup' onClick={toggleDropdown}>Login</Link>
                
              )}
            </div>
          )}
      </div>
      

      {/* Links container below the navbar */}
      <div className={`link-container ${showLinkContainer ? 'show' : ''}`} onClick={closeLinkContainer}>
        <Link to='/' onClick={closeLinks}>Home</Link>
        <Link to='/Product' onClick={closeLinks}>Product</Link>
        <Link to='/Company' onClick={closeLinks}>Company</Link>
        <Link to='/Contact' onClick={closeLinks}>Contact</Link>
        <Link id='navbarButton' to='/AirMap' onClick={closeLinks}>AirMap</Link>
        <div id='profil' onClick={setShowDropdown}></div>
          <Link to='/Profile' onClick={toggleDropdown}>Profile</Link>
          <Link to='/Guidedk' onClick={toggleDropdown}>Guide</Link>
          <Link to='/signup' onClick={toggleDropdown}>Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
