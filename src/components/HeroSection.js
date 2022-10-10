import React from "react";
import HeroImage from "../images/hero-image.png";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src={HeroImage} className="hero-image" alt="Hero" />
      <div className="filter">
        <p>FILTER | SORT</p>
      </div>
    </div>
  );
};

export default HeroSection;
