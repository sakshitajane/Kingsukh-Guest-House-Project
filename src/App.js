
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Room from './components/Room';
import Service from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/ContactUs';
import Map from './components/Map';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutUs />
      <Room/>
      <Service/>
       <Gallery/>
        <Contact/>
        <Map/>
        <Footer/>
    </div>
  );
}

export default App;
