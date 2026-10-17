import React from 'react';
import '../App.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-tag">🏭 Trusted Packaging Partner in Nigeria</span>
          <h1 className="hero-title">
            Custom Carton <span className="highlight">Packaging & Printing</span> Solutions
          </h1>
          <p className="hero-text">
            We design, manufacture, and print high-quality carton boxes for businesses
            of all sizes. From product packaging to branded cartons — we deliver
            durability, style, and value.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-gold">Request a Quote</a>
            <a href="#products" className="btn-outline-light">View Products</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>1M+</h3>
              <p>Cartons Delivered</p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Hero;