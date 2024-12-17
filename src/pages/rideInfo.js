import React from "react";
import "../css/App.css"; // Include your global CSS here
import Header from "../header";

function RideInfo() {
  return (
    <div>
      <Header/>
      <div className="ride-info-page">
        <h1>Ride Info</h1>
        <p>Find routes, tips, and everything you need to join our rides.</p>
        <div className="ride-details">
          {/* Add details about rides */}
          <ul>
            <li>Route A: Easy - 10 km</li>
            <li>Route B: Intermediate - 25 km</li>
            <li>Route C: Advanced - 50 km</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RideInfo; 
