
import React from 'react';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Room from './pages/Room';
import Service from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/ContactUs';
import Map from './pages/Map';
import Footer from './pages/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutUs />
      <Room />
      <Service />
      <Gallery />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
