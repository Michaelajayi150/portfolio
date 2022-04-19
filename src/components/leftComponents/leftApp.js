import React from "react";
import Contact from "./Contacts";
import LeftHero from "./LeftHeroSection";
import Technologies from "./Technologies";

function LeftApp() {
  return (
    <div className="left">
      <LeftHero />
      <Technologies />
      <Contact />
    </div>
  );
}

export default LeftApp;
