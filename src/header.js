import React, { useState } from "react";
import "./App.css"; // Make sure your CSS file path matches

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive); // Toggle the menu state
  };

  return (
    <header className="header">
      {/* Hamburger Icon */}
      <div
        className={`hamburger ${isMenuActive ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Menu */}
      <nav className={`nav ${isMenuActive ? "active" : ""}`}>
        <ul className="nav-list">
          <li>
            <a href="#welcome">Welcome</a>
          </li>
          <li>
            <a href="#Ride-info">Ride Info</a>
          </li>
          <li>
            <a href="#Kits">Kits</a>
          </li>
          <li>
            <a href="#Pics">Pictures</a>
          </li>
        </ul>
        <button className="contact-button">Contact Us</button>
      </nav>
    </header>
  );
}

export default Header;