import React, { useEffect, useState } from 'react';
import './App.css';

function VeloSouth() {
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setRotate(window.scrollY > 100); // Trigger the rotation effect after scrolling a bit
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
          <ul>
            <li>Ride Info</li>
            <li>Kits</li>
            <li>Pictures</li>
          </ul>
          <button className="contact-button">Contact</button>
        </nav>
        <div className="intro">
          <h1>Welcome to <span className="velo-south-title">VeloSouth</span></h1>
        </div>
        <div className="logo">
          <img src="logo.png" alt="VeloSouth Logo" />
        </div>
      </header>

      {/* Rotating Image Sections */}
      <section className="content-section">
        {/* Ride Info Section */}
        <div className="content-item">
          <div className="text">
            <h2>Check Out Our <span className="highlight">Ride Info</span> -&gt;</h2>
          </div>
          <div className={`image rotate-clockwise ${rotate ? 'active' : ''}`}>
            <img src="ride-info.jpg" alt="Cyclist" />
          </div>
        </div>

        {/* Kits Section */}
        <div className="content-item">
          <div className="text">
            <h2>Check Out Our <span className="highlight">Kits</span> -&gt;</h2>
          </div>
          <div className={`image rotate-clockwise ${rotate ? 'active' : ''}`}>
            <img src="kits.jpg" alt="Cycling Kits" />
          </div>
        </div>

        {/* Pictures Section */}
        <div className="content-item">
          <div className="text">
            <h2>Check Out Our <span className="highlight">Pictures</span> -&gt;</h2>
          </div>
          <div className={`image rotate-clockwise ${rotate ? 'active' : ''}`}>
            <img src="pictures.jpg" alt="Cycling Group" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default VeloSouth;

