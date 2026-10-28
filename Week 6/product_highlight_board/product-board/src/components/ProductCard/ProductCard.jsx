import React from 'react';
import './ProductCard.css';

class ProductCard extends React.Component {
  render() {
    const name = 'Wireless Headphones';
    const category = 'Electronics';
    const price = '$59.99';
    const rating = '4.5 Stars';
    const isFeatured = true;

    return (
      <article className="product-card">
        <h2 className="product-card__heading">Product Details</h2>
        <ul className="product-card__details">
          <li>Name: {name}</li>
          <li>Category: {category}</li>
          <li>Price: {price}</li>
          <li>Rating: {rating}</li>
        </ul>
        {isFeatured && (
          <p className="product-card__badge">Featured</p>
        )}
      </article>
    );
  }
}

export default ProductCard;
