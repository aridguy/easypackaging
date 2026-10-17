import React from 'react';
import '../App.css';

const reasons = [
  { icon: '⚡', title: 'Fast Turnaround', desc: 'Quick production and delivery times without compromising quality.' },
  { icon: '💎', title: 'Premium Quality', desc: 'Strong, durable materials that protect your products perfectly.' },
  { icon: '💰', title: 'Affordable Pricing', desc: 'Competitive rates for bulk orders with no hidden costs.' },
  { icon: '🎨', title: 'Custom Design', desc: 'Free design consultation to bring your branding vision to life.' },
];

function WhyChooseUs() {
  return (
    <section id="why-us" className="why-us">
      <div className="container-custom">
        <h2 className="section-title-light">Why Choose Us</h2>
        <p className="section-subtitle-light">
          Trusted by hundreds of businesses across Nigeria for reliable packaging solutions.
        </p>

        <div className="reasons-grid">
          {reasons.map((reason, idx) => (
            <div className="reason-card" key={idx}>
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;