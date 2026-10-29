import React from 'react';
import './HotelCard.css';

function HotelCard({ name, city, pricePerNight, isAvailable }) {
  return (
    <li className="hotel-card">
      <p className="hotel-card__field">Hotel: {name}</p>
        <p className="hotel-card__field">City: {city}</p>
        <p className="hotel-card__field">Price Per Night: {pricePerNight}</p>
      {isAvailable && (
        <span className="hotel-card__badge">Available</span>
      )}
    </li>
  );
}

export default HotelCard;
