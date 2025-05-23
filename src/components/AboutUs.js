import React from 'react';
import guestHouseImage from '../assets/out.jpg';
const AboutUs = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-image-wrapper">
        <img
          src={guestHouseImage}
          alt="Kingsukh Guest House"
          className="about-image"
        />
      </div>
      <div className="about-content">
        <p className="title">ABOUT US</p>
        <h2>The Best Holidays Start Here!</h2>
        <p className="description">
          Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis.
          Your ideal retreat beckons, promising a harmonious blend of nature’s beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
        </p>
        <p className="address">
          📍 <strong>Address:</strong> Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
        </p>
        <p className="contact">
          📞 <strong>Contact us:</strong> +91 9007062180
        </p>
        <button className="book-btn">BOOK NOW</button>
      </div> 
    </section>
  );
};
export default AboutUs;
