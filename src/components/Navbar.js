import React, { useState, useEffect } from 'react';
import '../App.css';
import Logo from "../assets/logo.PNG"; // 👈 Add this line to import your logo image

// 👇 Change this to your WhatsApp number (country code, digits only)
const WHATSAPP_NUMBER = '2348012345678';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    product: '',
    quantity: '',
    details: '',
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = showQuote ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showQuote]);

  const closeMenu = () => setMenuOpen(false);

  const openQuote = () => {
    setMenuOpen(false);
    setShowQuote(true);
  };

  const closeQuote = () => {
    setShowQuote(false);
    setSent(false);
    setForm({ name: '', phone: '', product: '', quantity: '', details: '' });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.product) {
      alert('Please fill in Name, Phone, and Product.');
      return;
    }

    const message =
      `*New Quote Request*%0A%0A` +
      `*Name:* ${form.name}%0A` +
      `*Phone:* ${form.phone}%0A` +
      `*Product:* ${form.product}%0A` +
      (form.quantity ? `*Quantity:* ${form.quantity}%0A` : '') +
      (form.details ? `%0A*Details:* ${form.details}` : '');

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    setSent(true);
  };

  return (
    <>
      <nav className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="nav-logo" onClick={closeMenu}>
            {/* <span className="logo-icon">📦</span> */}
            <a href="#home" className="nav-logo" onClick={closeMenu}>
              <img src={Logo} alt="Easy Packaging Logo" className="logo-img" />
              <span className="logo-text">
                <span className="logo-accent">PACKAGING</span>
              </span>
            </a>
          </a>

          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#products" onClick={closeMenu}>Products</a>
            <a href="#why-us" onClick={closeMenu}>Why Us</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <button className="nav-cta" onClick={openQuote}>Get Quote</button>
          </div>

          <div
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* ================= QUOTE POPUP ================= */}
      {showQuote && (
        <div className="q-overlay" onClick={closeQuote}>
          <div className="q-modal" onClick={(e) => e.stopPropagation()}>
            <button className="q-close" onClick={closeQuote}>&times;</button>

            {!sent ? (
              <>
                <h2 className="q-title">Get a Free Quote</h2>
                <p className="q-sub">Tell us what you need — we'll reply within 24 hours.</p>

                <form className="q-form" onSubmit={handleSubmit}>
                  <input
                    name="name"
                    placeholder="Full Name *"
                    value={form.name}
                    onChange={handleChange}
                  />
                  <input
                    name="phone"
                    placeholder="Phone Number *"
                    value={form.phone}
                    onChange={handleChange}
                  />
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                  >
                    <option value="">Select Product *</option>
                    <option>Custom Carton Boxes</option>
                    <option>Bulk Packaging Order</option>
                    <option>Printed Boxes</option>
                    <option>Corrugated Boxes</option>
                    <option>Other</option>
                  </select>
                  <input
                    name="quantity"
                    placeholder="Quantity (e.g. 500 boxes)"
                    value={form.quantity}
                    onChange={handleChange}
                  />
                  <textarea
                    name="details"
                    placeholder="Additional details (optional)"
                    rows={3}
                    value={form.details}
                    onChange={handleChange}
                  />
                  <button type="submit" className="q-submit">
                    Send on WhatsApp
                  </button>
                </form>
              </>
            ) : (
              <div className="q-success">
                <div className="q-check">✓</div>
                <h2>Thank you!</h2>
                <p>Your request has been sent. We'll get back to you shortly.</p>
                <button className="q-submit" onClick={closeQuote}>Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;