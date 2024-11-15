import React from "react";
import "./App.css"; // Make sure your CSS file path matches

function Header() {
  return (
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
  );
}

export default Header;
