import React from 'react';
import './DishCard.css';

class DishCard extends React.Component {
  render() {
    const dish = 'Paneer Butter Masala';
    const cuisine = 'North Indian';
    const price = 'Rs. 220';
    const spicelevel = 'Medium';
    const isFeatured = true;

    return (
      <article className="dish-card">
        <h2 className="dish-card__heading">Dish Details</h2>
        <ul className="dish-card__details">
          <li>Dish: {dish}</li>
          <li>Cuisine: {cuisine}</li>
          <li>Price: {price}</li>
          <li>Spice Level: {spicelevel}</li>
        </ul>
        {isFeatured && (
          <p className="dish-card__badge">Featured</p>
        )}
      </article>
    );
  }
}

export default DishCard;
