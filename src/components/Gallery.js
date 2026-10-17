import React, { useState } from 'react';
import '../App.css';

// 👇 Direct imports — no string paths
import box1 from '../assets/box1.jpg';
import box2 from '../assets/box2.jpg';
import box3 from '../assets/box3.jpg';
import box4 from '../assets/box4.jpg';
import box5 from '../assets/box5.jpg';

// 👇 Your image list — edit titles & categories freely
const images = [
  { src: box1, category: 'Carton Boxes',  title: 'Custom Carton Box' },
  { src: box2, category: 'Printed Boxes', title: 'Branded Printed Box' },
  { src: box3, category: 'Corrugated',    title: 'Heavy-Duty Corrugated' },
  { src: box4, category: 'Bulk Orders',   title: 'Bulk Production' },
  { src: box5, category: 'Carton Boxes',  title: 'Shipping Carton' },
];

const categories = ['All', 'Carton Boxes', 'Printed Boxes', 'Corrugated', 'Bulk Orders'];

function Gallery() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? images : images.filter((img) => img.category === active);

  return (
    <section id="gallery" className="gallery">
      <div className="container-custom">
        <h2 className="section-title">Our Gallery</h2>
        <p className="section-subtitle">
          A look at some of the packaging work we've delivered for our clients.
        </p>

        {/* Filter buttons */}
        <div className="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery-filter ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="gallery-grid">
          {filtered.map((img, i) => (
            <div key={img.src} className="gallery-item">
              <img src={img.src} alt={img.title} loading="lazy" />
              <div className="gallery-overlay">
                <span>{img.title}</span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="gallery-empty">No images in this category yet.</p>
        )}
      </div>
    </section>
  );
}

export default Gallery;