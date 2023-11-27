import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.scss';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showLinkContainer, setShowLinkContainer] = useState(false);

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
        <Link to='/Signup' id='profil'></Link>
      </div>

      {/* Links container below the navbar */}
      <div className={`link-container ${showLinkContainer ? 'show' : ''}`} onClick={closeLinkContainer}>
        <Link to='/' onClick={closeLinks}>Home</Link>
        <Link to='/Product' onClick={closeLinks}>Product</Link>
        <Link to='/Company' onClick={closeLinks}>Company</Link>
        <Link to='/Contact' onClick={closeLinks}>Contact</Link>
        <Link id='navbarButton' to='/AirMap' onClick={closeLinks}>AirMap</Link>
        <Link to='/Signup' onClick={closeLinks}>Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
