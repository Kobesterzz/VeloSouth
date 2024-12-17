import React from "react";
import "../css/pics.css"; 
import Header from "../header";

function Pictures() {
  return (
    <div>
      <Header/>
      <div className="pictures-page">
        <h1>Pictures</h1>
        <p>Take a look at some memorable moments from our past rides.</p>
        <div className="pictures-gallery">
          {/* Add a gallery of pictures */}
          <img src="/img/Pic.jpg" alt="Cycling Team" />
        </div>
      </div>
    </div>
  );
}

export default Pictures;
