import React from 'react';
import './MatchCard.css';

function MatchCard({ match, league, date, isLive }) {
  return (
    <li className="match-card">
      <p className="match-card__field">Match: {match}</p>
        <p className="match-card__field">League: {league}</p>
        <p className="match-card__field">Date: {date}</p>
      {isLive && (
        <span className="match-card__badge">Live</span>
      )}
    </li>
  );
}

export default MatchCard;
