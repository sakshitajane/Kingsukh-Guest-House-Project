import React from 'react';
import backgroundImage from '../assets/background.jpg';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section
      className="home"
      id="home"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay"></div>
      <div className="home-content">
        <motion.p
          className="tagline"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Simple – Unique – Friendly
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Make Yourself At Home <br />
          In Our <span className="highlight">Guest House.</span>
        </motion.h1>

        <motion.button
          className="home-btn"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          BOOK NOW
        </motion.button>
      </div>
    </section>
  );
}

export default Home;
