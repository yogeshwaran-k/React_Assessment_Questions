import React from 'react';
import './SongCard.css';

function SongCard({ title, artist, duration, isFavorite }) {
  return (
    <li className="song-card">
      <p className="song-card__field">Song: {title}</p>
        <p className="song-card__field">Artist: {artist}</p>
        <p className="song-card__field">Duration: {duration}</p>
      {isFavorite && (
        <span className="song-card__badge">Favorite</span>
      )}
    </li>
  );
}

export default SongCard;
