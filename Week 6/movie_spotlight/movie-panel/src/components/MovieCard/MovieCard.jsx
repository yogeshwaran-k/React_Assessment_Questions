import React from 'react';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const title = 'The Silent Horizon';
    const genre = 'Sci-Fi';
    const director = 'Maria Chen';
    const rating = '4.7/5';
    const isFeatured = true;

    return (
      <article className="movie-card">
        <h2 className="movie-card__heading">Movie Details</h2>
        <ul className="movie-card__details">
          <li>Title: {title}</li>
          <li>Genre: {genre}</li>
          <li>Director: {director}</li>
          <li>Rating: {rating}</li>
        </ul>
        {isFeatured && (
          <p className="movie-card__badge">Featured</p>
        )}
      </article>
    );
  }
}

export default MovieCard;
