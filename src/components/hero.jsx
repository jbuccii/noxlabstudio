import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/assets/hero.mp4" type="video/mp4" />
        <source src="/assets/hero.mov" type="video/quicktime" />
      </video>

      <div className="hero-overlay"></div>
      <div className="hero-vignette"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          <span className="glitch" data-text="LIGHTS OFF, TRUTH ON">
            LIGHTS OFF, TRUTH ON
          </span>
        </h1>
        <p className="hero-sub">
          A creative film lab where light, sound, and editing become language.
        </p>
        <a className="btn" href="#manifesto">Enter</a>
      </div>
    </section>
  );
};

export default Hero;



