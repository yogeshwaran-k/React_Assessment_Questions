import React from 'react';
import './BookCard.css';

class BookCard extends React.Component {
  render() {
    const title = 'The Midnight Library';
    const author = 'Matt Haig';
    const genre = 'Fiction';
    const pages = '288 Pages';
    const isFeatured = true;

    return (
      <article className="book-card">
        <h2 className="book-card__heading">Book Details</h2>
        <ul className="book-card__details">
          <li>Title: {title}</li>
          <li>Author: {author}</li>
          <li>Genre: {genre}</li>
          <li>Pages: {pages}</li>
        </ul>
        {isFeatured && (
          <p className="book-card__badge">Featured</p>
        )}
      </article>
    );
  }
}

export default BookCard;
