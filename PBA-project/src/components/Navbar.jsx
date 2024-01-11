import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.scss';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();
  const [showLinks, setShowLinks] = useState(false);
  const [showLinkContainer, setShowLinkContainer] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [logoutMessage, setLogoutMessage] = useState('');
  const dropdownRef = useRef(null)


  useEffect(() => {
    const user = sessionStorage.getItem('user');
    const name = sessionStorage.getItem('userName');
    if (user) {
      setIsLoggedIn(true);
      setUserName(name || '');
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {

      sessionStorage.removeItem('user');
      sessionStorage.removeItem('userName');

      setIsLoggedIn(false);
      setUserName('');
      console.log('Logout successful');
    } catch (error) {
      console.error('An error occurred during logout:', error);
    }
  };

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



  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to='/'>
          <img src="images/logo.png" alt="logo-placeholder" />
        </Link>
      </div>

      <div className={`burger-menu ${showLinks ? 'show' : ''}`} onClick={toggleLinks}>
        <div></div>
        <div id='middle'></div>
        <div></div>
      </div>


      <div className={`link ${showLinks ? 'show' : ''}`}>
        <Link to='/' className={location.pathname === '/' ? 'active' : ''} onClick={closeLinks}>Home</Link>
        <Link to='/Product' className={location.pathname === '/Product' ? 'active' : ''} onClick={closeLinks}>Product</Link>
        <Link to='/Company' className={location.pathname === '/Company' ? 'active' : ''} onClick={closeLinks}>Company</Link>
        <Link to='/Contact' className={location.pathname === '/Contact' ? 'active' : ''} onClick={closeLinks}>Contact</Link>
        <Link id='navbarButton' to='/Addairplate'>Add Airplate</Link>
        <div className="dropdown-btn" onClick={toggleDropdown}>
          <button id='profil'>{isLoggedIn ? '' : ''}</button>
        </div>

        {showDropdown && (
          <div className="dropdown-content" ref={dropdownRef}>
            <Link to='/Profile' onClick={toggleDropdown}>Profile</Link>
            <Link to='/Guideeng' onClick={toggleDropdown}>Guide</Link>
            {isLoggedIn ? (
              <>
                <Link to="/" onClick={handleLogout}>Logout</Link>
              </>
            ) : (

              <Link to='/login'>
                Login
              </Link>

            )}
          </div>
        )}
      </div>



      <div className={`link-container ${showLinkContainer ? 'show' : ''}`} onClick={closeLinkContainer}>
        <Link to='/' onClick={closeLinks}>Home</Link>
        <Link to='/Product' onClick={closeLinks}>Product</Link>
        <Link to='/Company' onClick={closeLinks}>Company</Link>
        <Link to='/Contact' onClick={closeLinks}>Contact</Link>
        <Link id='navbarButton' to='/' onClick={closeLinks}>Company</Link>
        <div id='profil' onClick={setShowDropdown}></div>
        <Link to='/Profile' onClick={toggleDropdown}>Profile</Link>
        <Link to='/Guidedk' onClick={toggleDropdown}>Guide</Link>
        <Link to='/signup' onClick={toggleDropdown}>Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
