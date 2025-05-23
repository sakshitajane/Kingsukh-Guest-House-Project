import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Intro */}
        <div className="footer-column">
          <h3 className="footer-logo">Kingsukh<br />Guest<br />House</h3>
          <p className="footer-description">
            Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.
          </p>
          <button className="book-now">BOOK NOW</button>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Browse Destinations</li>
            <li>Special Offers & Packages</li>
            <li>Room Types & Amenities</li>
            <li>Customer Reviews & Ratings</li>
            <li>Travel Tips & Guides</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4>OUR SERVICES</h4>
          <ul>
            <li>Concierge Assistance</li>
            <li>Flexible Booking Options</li>
            <li>Airport Transfers</li>
            <li>Wellness & Recreation</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h4>CONTACT US</h4>
          <p>
            Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
          </p>
          <p>
            <a href="mailto:kkghosh0099@gmail.com">kkghosh0099@gmail.com</a>
          </p>
          <p>
            <a href="tel:+919007062180">+91 9007062180</a>
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/kingsukhguesthouse/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        Copyright © 2024 Kingsukh Guest House. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
