import React from 'react';
import img1 from '../assets/out.jpg';
import img2 from '../assets/background.jpg';
import img3 from '../assets/large.jpg';
import img4 from '../assets/small.jpg';
import img5 from '../assets/palash.jpg';
import img6 from '../assets/baranti.jpg';
import img7 from '../assets/recep.jpg';
import img8 from '../assets/mithonDam.jpg';
import img9 from '../assets/flower.jpg';
import img10 from '../assets/room1.jpg';

const images = [
  { src: img1, label: 'Entrance View(Outside)' },
  { src: img2, label: 'Mountain' },
  { src: img5, label: 'Palash Blossoms (Outside)' },
  { src: img6, label: 'Baranti' },
  { src: img8, label: 'Maithon Dam' },
  { src: img9, label: 'Garden Flowers(Outside)' },
  { src: img3, label: 'Room (large)' },
  { src: img10, label: 'Room' },
  { src: img4, label: 'Room(small)' },
  { src: img7, label: 'Reception Area (Hall)' },

];

const Gallery = () => {
  return (
    <section id="gallery" >
         <div className="gallery-section">
      <h2 className="title">GALLERY</h2>
      <div className="gallery-grid">
        {images.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.src} alt={`Gallery ${index + 1}`} className="gallery-image" />
            <p className="gallery-caption">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
 
  );
};

export default Gallery;
