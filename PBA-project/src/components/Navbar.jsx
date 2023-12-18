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
  const [logoutMessage, setLogoutMessage] = useState('');




  useEffect(() => {
    const user = sessionStorage.getItem('user');
    const name = sessionStorage.getItem('userName');
    
    if (user && name) {
      setIsLoggedIn(true);
      setUserName(name || '');
    }
  }, [isLoggedIn, userName]);


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

  const handleLogout = async () => {
    try {
      const response = await axios.post('https://kienzhe.dk/backend/logout.php');
      console.log('Logout Response:', response);
      if (response.data.success) {
        setIsLoggedIn(false);
        setUserName('');

        sessionStorage.removeItem('user');
        sessionStorage.removeItem('userName');

        console.log('Logout successful');
      console.log('IsLoggedIn:', isLoggedIn);
      console.log('UserName:', userName);
      } else {
        console.error('logout failed:' , response.data.message);
      }
    } catch (error) {
      console.error('an error occured:', error);
    }
  };

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
        <Link id='navbarButton' to='/Addairplate'>Add Airplate</Link>
        <div className="dropdown-btn" onClick={toggleDropdown}>
          <button id='profil'>{isLoggedIn ? '' : ''}</button>
        </div>
          {/* Dropdown content */}
          {showDropdown && (
            <div className="dropdown-content">
              <Link to='/Profile' onClick={toggleDropdown}>Profile</Link>
              <Link to='/Guideeng' onClick={toggleDropdown}>Guide</Link>
              {isLoggedIn ? (
                <>
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
