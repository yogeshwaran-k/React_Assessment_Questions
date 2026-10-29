import React from 'react';
import './ForecastCard.css';

function ForecastCard({ city, condition, temperature, isRainy }) {
  return (
    <li className="forecast-card">
      <p className="forecast-card__field">City: {city}</p>
        <p className="forecast-card__field">Condition: {condition}</p>
        <p className="forecast-card__field">Temperature: {temperature}</p>
      {isRainy && (
        <span className="forecast-card__badge">Rainy</span>
      )}
    </li>
  );
}

export default ForecastCard;
