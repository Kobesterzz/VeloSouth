import React, { useEffect, useState } from 'react';
import './App.css';
import Cycle from './img/Cycle.png'; // Use relative path
import Pic from './img/Pic.jpg'
import kits from './img/kits.png'
import { ReactComponent as Logo } from './img/logo.svg'; // Import SVG as component

function VeloSouth() {
  const [activeItem, setActiveItem] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const newActiveItem = Math.floor(window.scrollY / 300) % 4; // Adjust based on scroll position
    setActiveItem(newActiveItem);
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  return (
    <div className="velo-south-container">
      {/* Floating Blob Background */}
      <div className="floating-blob"></div>

      {/* Header Section */}
      <header className="header">
        <nav className="nav">
          {/* Left-aligned navigation items */}
          <div className="nav-items-left">
            <ul>
              <li>Ride Info</li>
              <li>Kits</li>
              <li>Pictures</li>
            </ul>
          </div>

          {/* Right-aligned contact button */}
          <div className="nav-contact">
            <button className="contact-button">Contact</button>
          </div>
        </nav>
      </header>

      <section className="content-section">
      <div className="diamond-container">
        {/* Ride Info Section */}
        <div className={`content-item ${activeItem === 0 ? 'active' : ''}`}>
          <div className="text">
            <h2>Welcome to <span className="highlight">VeloSouth</span> -&gt;</h2>
          </div>
          <div className="image">
            <Logo className="logo"/>
          </div>
        </div>

        {/* Ride Info Section */}
        <div className={`content-item ${activeItem === 1 ? 'active' : ''}`}>
          <div className="text">
            <h2>Check Out Our <span className="highlight">Ride Info</span> -&gt;</h2>
          </div>
          <div className="image">
            <img src={Cycle} alt="Cyclist" />
          </div>
        </div>

        {/* Kits Section */}
        <div className={`content-item ${activeItem === 2 ? 'active' : ''}`}>
          <div className="text">
            <h2>Check Out Our <span className="highlight">Kits</span> -&gt;</h2>
          </div>
          <div className="image">
            <img src={kits} alt="Cycling Kits" />
          </div>
        </div>

        {/* Pictures Section */}
        <div className={`content-item ${activeItem === 3 ? 'active' : ''}`}>
          <div className="text">
            <h2>Check Out Our <span className="highlight">Pictures</span> -&gt;</h2>
          </div>
          <div className="image">
            <img src={Pic} alt="Cycling Group" />
          </div>
        </div>
      </div>
    </section>

    </div>
  );
}

export default VeloSouth;

