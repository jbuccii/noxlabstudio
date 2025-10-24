import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/assets/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay sfocato e leggero scuro */}
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>LIGHTS OFF, TRUTH ON</h1>
        <p>
          Creative direction, film production, and digital experiences. <br />
          We craft visuals that connect emotionally.
        </p>
        <button>View our work</button>
      </div>
    </section>
  );
};

export default HeroSection;
