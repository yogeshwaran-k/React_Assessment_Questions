import React from 'react';
import './GadgetCard.css';

class GadgetCard extends React.Component {
  render() {
    const gadget = 'Smart Fitness Band';
    const brand = 'PulseFit';
    const price = '$39.99';
    const reviewscore = '4.2/5';
    const isFeatured = true;

    return (
      <article className="gadget-card">
        <h2 className="gadget-card__heading">Gadget Details</h2>
        <ul className="gadget-card__details">
          <li>Gadget: {gadget}</li>
          <li>Brand: {brand}</li>
          <li>Price: {price}</li>
          <li>Review Score: {reviewscore}</li>
        </ul>
        {isFeatured && (
          <p className="gadget-card__badge">Featured</p>
        )}
      </article>
    );
  }
}

export default GadgetCard;
