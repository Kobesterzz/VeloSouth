import React from "react";
import "../css/App.css"; 

function Kits() {
  return (
    <div className="kits-page">
      <h1>Kits</h1>
      <p>Upgrade your ride with our stylish and performance-driven gear.</p>
      <div className="kits-gallery">
        {/* Add images or content about kits */}
        <img src="/img/kits.png" alt="Cycling Kit" />
      </div>
    </div>
  );
}

export default Kits;