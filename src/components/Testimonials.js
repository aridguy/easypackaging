import React from 'react';
import '../App.css';

const testimonials = [
  {
    name: 'Chinedu Okeke',
    role: 'CEO, Fresh Foods Ltd',
    text: 'Excellent quality cartons for our food products. Delivery was fast and the print quality was superb. Highly recommended!',
  },
  {
    name: 'Aisha Bello',
    role: 'Founder, Bella Cosmetics',
    text: 'The custom packaging boxes transformed our brand image. Customers love the design and the boxes are very durable.',
  },
  {
    name: 'Tunde Adeyemi',
    role: 'Manager, Lagos Logistics',
    text: 'We order in bulk every month and they never disappoint. Great pricing, great quality, reliable service.',
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container-custom">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Real feedback from businesses we've helped package their products.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="quote-mark">"</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <div className="testimonial-author">
                <div className="author-avatar">{t.name.charAt(0)}</div>
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;