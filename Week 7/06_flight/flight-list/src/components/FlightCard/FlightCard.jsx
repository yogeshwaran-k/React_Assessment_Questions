import React from 'react';
import './FlightCard.css';

function FlightCard({ flight, origin, destination, isDelayed }) {
  return (
    <li className="flight-card">
      <p className="flight-card__field">Flight: {flight}</p>
        <p className="flight-card__field">Origin: {origin}</p>
        <p className="flight-card__field">Destination: {destination}</p>
      {isDelayed && (
        <span className="flight-card__badge">Delayed</span>
      )}
    </li>
  );
}

export default FlightCard;
