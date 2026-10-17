import React from 'react';
import '../App.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container-custom">
        <div className="about-wrapper">
          <div className="about-image">
            <div className="about-img-box">
              <span className="about-emoji">🏭</span>
            </div>
            <div className="about-badge">
              <h3>10+</h3>
              <p>Years of Excellence</p>
            </div>
          </div>

          <div className="about-content">
            <span className="about-tag">About Us</span>
            <h2 className="about-title">
              Your Reliable Carton Packaging Partner in Nigeria
            </h2>
            <p className="about-text">
              At <strong>EASY PACKAGE & GENERAL MERCHANTS</strong>, we specialize in manufacturing
              and printing high-quality carton boxes for businesses across Nigeria.
              Our state-of-the-art facility and experienced team ensure every box we
              produce meets international standards.
            </p>
            <p className="about-text">
              Whether you need custom-sized cartons for product packaging, branded
              boxes for retail, or bulk packaging for logistics — we deliver
              durability, precision, and style in every order.
            </p>

            <ul className="about-list">
              <li>✅ Custom sizes & designs</li>
              <li>✅ High-quality printing</li>
              <li>✅ Eco-friendly materials</li>
              <li>✅ Fast nationwide delivery</li>
            </ul>

            <a href="#contact" className="btn-primary-custom">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;