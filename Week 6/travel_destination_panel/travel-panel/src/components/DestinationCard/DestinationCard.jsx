import React from 'react';
import './DestinationCard.css';

class DestinationCard extends React.Component {
  render() {
    const place = 'Santorini';
    const country = 'Greece';
    const bestseason = 'Summer';
    const rating = '4.8/5';
    const isFeatured = true;

    return (
      <article className="destination-card">
        <h2 className="destination-card__heading">Destination Details</h2>
        <ul className="destination-card__details">
          <li>Place: {place}</li>
          <li>Country: {country}</li>
          <li>Best Season: {bestseason}</li>
          <li>Rating: {rating}</li>
        </ul>
        {isFeatured && (
          <p className="destination-card__badge">Featured</p>
        )}
      </article>
    );
  }
}

export default DestinationCard;
