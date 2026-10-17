import React from 'react';
import '../App.css';

const products = [
  { icon: '📦', name: 'Corrugated Carton Boxes', desc: 'Durable shipping & storage cartons' },
  { icon: '🎁', name: 'Retail Packaging Boxes', desc: 'Attractive branded retail boxes' },
  { icon: '🍕', name: 'Food Packaging Cartons', desc: 'Food-safe carton boxes' },
  { icon: '💊', name: 'Pharmaceutical Cartons', desc: 'Precision medical packaging' },
  { icon: '👕', name: 'Apparel Boxes', desc: 'Stylish boxes for clothing brands' },
  { icon: '📱', name: 'Electronics Cartons', desc: 'Protective electronic packaging' },
  { icon: '🍷', name: 'Beverage Cartons', desc: 'Safe beverage & bottle cartons' },
  { icon: '🌱', name: 'Eco-Friendly Boxes', desc: 'Recyclable sustainable cartons' },
];

function Products() {
  return (
    <section id="products" className="products">
      <div className="container-custom">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">
          A wide range of carton packaging solutions for every industry and product type.
        </p>

        <div className="products-grid">
          {products.map((product, idx) => (
            <div className="product-card" key={idx}>
              <span className="product-icon">{product.icon}</span>
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;