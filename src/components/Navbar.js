import React, { useState } from 'react';


function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <header className="navbar-alt">
        <div className="container">
          <div className="logo">
            <span>Kingsukh</span>
            <span className="sub-logo">Guest House</span>
          </div>

          <nav className="desktop-menu">
            <ul className="nav-menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#rooms">Rooms</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <button className="nav-book-btn">BOOK NOW</button>
          </nav>

          <div className="hamburger" onClick={toggleDrawer}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </header>

      {/* Drawer Menu */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home" onClick={toggleDrawer}>Home</a></li>
          <li><a href="#about" onClick={toggleDrawer}>About</a></li>
          <li><a href="#services" onClick={toggleDrawer}>Services</a></li>
          <li><a href="#rooms" onClick={toggleDrawer}>Rooms</a></li>
          <li><a href="#gallery" onClick={toggleDrawer}>Gallery</a></li>
          <li><a href="#contact" onClick={toggleDrawer}>Contact</a></li>
          <button className="nav-book-btn">BOOK NOW</button>
        </ul>
      </div>

      {/* Overlay */}
      {drawerOpen && <div className="drawer-overlay" onClick={toggleDrawer}></div>}
    </>
  );
}

export default Navbar;
