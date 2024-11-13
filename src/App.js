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
      // Calculate which item should be active based on scroll position
      const newActiveItem = Math.floor(window.scrollY / 300) % 4; // Adjust 300 based on your preferred scroll distance per item
      setActiveItem(newActiveItem);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="velo-south-container">
      <div className="floating-blob"></div>
      <header className="header">
        <nav className="nav">
          <div className="nav-items-left">
            <ul>
              <li>Ride Info</li>
              <li>Kits</li>
              <li>Pictures</li>
            </ul>
          </div>
          <div className="nav-contact">
            <button className="contact-button">Contact</button>
          </div>
        </nav>
      </header>

      <section className="content-section">
        <div className="diamond-container">
          {/* Each item is conditionally styled based on whether it's the active item */}
          <div className={`content-item ${activeItem === 0 ? 'active' : ''}`} id="item-1">
            <div className="image">
              <Logo className="logo" />
            </div>
            <div className="text">
              <h2>Welcome to <span className="highlight">VeloSouth</span> -&gt;</h2>
            </div>
          </div>

          <div className={`content-item ${activeItem === 1 ? 'active' : ''}`} id="item-2">
            <div className="image">
              <img src={Cycle} alt="Cyclist" />
            </div>
            <div className="text">
              <h2>Check Out Our <span className="highlight">Ride Info</span> -&gt;</h2>
            </div>
          </div>

          <div className={`content-item ${activeItem === 2 ? 'active' : ''}`} id="item-3">
            <div className="image">
              <img src={kits} alt="Cycling Kits" />
            </div>
            <div className="text">
              <h2>Check Out Our <span className="highlight">Kits</span> -&gt;</h2>
            </div>
          </div>

          <div className={`content-item ${activeItem === 3 ? 'active' : ''}`} id="item-4">
            <div className="image">
              <img src={Pic} alt="Cycling Group" />
            </div>
            <div className="text">
              <h2>Check Out Our <span className="highlight">Pictures</span> -&gt;</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



export default VeloSouth;
