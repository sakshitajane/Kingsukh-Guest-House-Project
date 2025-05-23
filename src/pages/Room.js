import React from 'react';
import room1 from '../assets/small.jpg';
import room2 from '../assets/large.jpg';
import 'remixicon/fonts/remixicon.css'; // Ensure this path is correct in your setup

const roomData = [
  {
    image: room1,
    title: 'Cozy Haven Room',
    description: 'Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.',
    price: '1000',
  },
  {
    image: room2,
    title: 'Spacious Serenity Suite',
    description: 'Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.',
    price: '1500',
  },
];

const Rooms = () => {
  return (
    <section className="rooms-section" id="rooms">
      <p className="title">OUR LIVING ROOM</p>
      <h2 className="section-heading">The Most Memorable Rest Time Starts Here.</h2>

      <div className="room-cards-container">
        {roomData.map((room, index) => (
          <div className="room-card" key={index}>
            <div className="room-image-wrapper">
              <img src={room.image} alt={room.title} className="room-image" />
              <div className="icon-overlay">
                <button className="icon-circle pink" onClick={() => alert('Loved!')}>
                  <i className="ri-heart-fill"></i>
                </button>
                <button className="icon-circle purple" onClick={() => alert('Stylish!')}>
                  <i className="ri-paint-fill"></i>
                </button>
                <button className="icon-circle blue" onClick={() => alert('Verified!')}>
                  <i className="ri-shield-star-line"></i>
                </button>
              </div>
            </div>

            <div className="room-details">
              <h3 className="room-title">{room.title}</h3>
              <p className="room-description">{room.description}</p>
              <p className="room-price">Starting from <strong>Rs. {room.price}/night</strong></p>
              <button className="book-btn">BOOK NOW</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
