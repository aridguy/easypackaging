import React from 'react';
import '../App.css';

const services = [
  {
    icon: '📦',
    title: 'Custom Carton Boxes',
    desc: 'Tailor-made carton boxes designed to fit your exact product dimensions and branding needs.',
  },
  {
    icon: '🖨️',
    title: 'Carton Printing',
    desc: 'High-quality offset and digital printing to make your brand stand out on every box.',
  },
  {
    icon: '🏷️',
    title: 'Branded Packaging',
    desc: 'Full branding solutions — logos, colors, and designs printed directly on your packaging.',
  },
  {
    icon: '🏭',
    title: 'Bulk Manufacturing',
    desc: 'Large-scale production capacity to meet your business demands quickly and affordably.',
  },
  {
    icon: '📐',
    title: 'Packaging Design',
    desc: 'Professional design team to create functional and attractive packaging for your products.',
  },
  {
    icon: '🚚',
    title: 'Nationwide Delivery',
    desc: 'Fast and reliable delivery of your cartons to any location across Nigeria.',
  },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="container-custom">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Complete carton packaging and printing solutions tailored for your business —
          from design to delivery.
        </p>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div className="service-card" key={idx}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;