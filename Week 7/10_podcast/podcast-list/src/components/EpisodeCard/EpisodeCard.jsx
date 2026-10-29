import React from 'react';
import './EpisodeCard.css';

function EpisodeCard({ title, host, duration, isNew }) {
  return (
    <li className="episode-card">
      <p className="episode-card__field">Episode: {title}</p>
        <p className="episode-card__field">Host: {host}</p>
        <p className="episode-card__field">Duration: {duration}</p>
      {isNew && (
        <span className="episode-card__badge">New</span>
      )}
    </li>
  );
}

export default EpisodeCard;
