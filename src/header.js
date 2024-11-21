import React from "react";
import "./App.css"; // Make sure your CSS file path matches

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-items-left">
          <ul className="nav-list">
          <li><a href="#welcome">Home</a></li>
          <li><a href="#Ride-info">Ride Info</a></li>
          <li><a href="#Kits">Kits</a></li>
          <li><a href="#Pics">Pictures</a></li>
          </ul>
        </div>
        <div className="nav-contact">
          <button className="contact-button">Contact</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;