import React from "react";
import { Routes, Route } from "react-router-dom";
import VeloSouth from "./pages/VeloSouth";
import Kits from "./pages/kits";
import Pictures from "./pages/pictures";
import RideInfo from "./pages/rideInfo";

console.log("VeloSouth:", VeloSouth); // Should not be undefined
console.log("Kits:", Kits); // Should not be undefined
console.log("Pictures:", Pictures); // Should not be undefined
console.log("RideInfo:", RideInfo); // Should not be undefined

function App() {
  return (
    <Routes>
      <Route path="/" element={<VeloSouth />} />
      <Route path="/velo-south" element={<VeloSouth />} />
      <Route path="/kits" element={<Kits />} />
      <Route path="/pictures" element={<Pictures />} />
      <Route path="/ride-info" element={<RideInfo />} />
    </Routes>
  );
}

export default App;