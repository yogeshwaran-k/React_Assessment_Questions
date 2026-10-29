import React from 'react';
import './ExerciseCard.css';

function ExerciseCard({ name, sets, duration, isCompleted }) {
  return (
    <li className="exercise-card">
      <p className="exercise-card__field">Exercise: {name}</p>
        <p className="exercise-card__field">Sets: {sets}</p>
        <p className="exercise-card__field">Duration: {duration}</p>
      {isCompleted && (
        <span className="exercise-card__badge">Completed</span>
      )}
    </li>
  );
}

export default ExerciseCard;
