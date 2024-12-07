import React, { useState } from "react";
import ContactModal from "./ContactModal";
import "./css/App.css";

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive); // Toggle the menu state
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <button className="contact-button" onClick={() => setIsModalOpen(true)}>
        Contact
        </button>
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </nav>
    </header>
  );
}

export default Header;