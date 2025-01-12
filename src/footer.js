import React from "react";
import "./css/App.css"; 
import "@fortawesome/fontawesome-free/css/all.min.css";


const Footer = () => {
  return (
    <footer className="velo-footer">
      <div className="footer-content">
        <h3>Follow VeloSouth</h3>
        <ul className="social-links">
          <li>
            <a
              href="https://www.instagram.com/velosouth_dfw/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61553256137110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          
        </ul>
      </div>
      <p className="footer-credits">© 2025 VeloSouth. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
