import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa';


const ContactSection = () => {
  return (
    <section id="contact">


      <div className="contact-wrapper">
        <div className="contact-card">
          {/* Contact Info */}
          <div className="contact-left">
            <h2>Contact Info</h2>
            <p>
              <FaMapMarkerAlt className="icon" />
              <a

                className="contact-link"
                onClick={(e) => e.stopPropagation()}
              >
                Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
              </a>
            </p>
            <p>
              <FaEnvelope className="icon" />
              <a href="mailto:kkghosh0099@gmail.com" className="contact-link">
                kkghosh0099@gmail.com
              </a>
            </p>

            <p>
              <FaPhoneAlt className="icon" />
              <a href="tel:+919007062180" className="contact-link">
                +91 9007062180
              </a>
            </p>
            <div className="social-icons">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>

          {/* Message Form */}
          <div className="contact-right">
            <h2>Send a Message</h2>
            <form>
              <div className="row">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="row">
                <input type="email" placeholder="Email Address" />
                <input type="text" placeholder="Mobile Number" />
              </div>
              <textarea placeholder="Write your message here..." rows="4" />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
