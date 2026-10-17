import React from 'react';
import '../App.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-custom">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <span>📦</span> YOUR <span className="accent">COMPANY</span>
            </div>
            <p className="footer-desc">
              Trusted carton packaging and printing company in Nigeria. We deliver
              quality, durability, and style in every box we make.
            </p>
            <div className="social-links">
              <a href="#!" aria-label="Facebook">📘</a>
              <a href="#!" aria-label="Instagram">📸</a>
              <a href="#!" aria-label="Twitter">🐦</a>
              <a href="#!" aria-label="LinkedIn">💼</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Custom Carton Boxes</a></li>
              <li><a href="#services">Carton Printing</a></li>
              <li><a href="#services">Branded Packaging</a></li>
              <li><a href="#services">Bulk Manufacturing</a></li>
              <li><a href="#services">Packaging Design</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>📍 312 Lagos-Abeokuta Expy CELE Bus Stop </li>
              <li>📞 +234 701 298 3524</li>
              <li>✉️ adediranezekiel250@gmail.com</li>
              <li>🕐 Mon - sun: 8AM - 6PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} EASY PACKAGE & GENERAL MERCHANTS. All rights reserved.</p>
          <p>Carton Packaging & Printing Solutions in Nigeria</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;