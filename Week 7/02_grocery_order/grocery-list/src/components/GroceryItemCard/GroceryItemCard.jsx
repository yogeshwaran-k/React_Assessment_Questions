import React from 'react';
import './GroceryItemCard.css';

function GroceryItemCard({ name, quantity, price, isOrganic }) {
  return (
    <li className="grocery-item-card">
      <p className="grocery-item-card__field">Item: {name}</p>
        <p className="grocery-item-card__field">Quantity: {quantity}</p>
        <p className="grocery-item-card__field">Price: {price}</p>
      {isOrganic && (
        <span className="grocery-item-card__badge">Organic</span>
      )}
    </li>
  );
}

export default GroceryItemCard;
