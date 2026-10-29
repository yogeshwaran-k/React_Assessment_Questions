import React from 'react';
import './LoanCard.css';

function LoanCard({ book, borrower, dueDate, isOverdue }) {
  return (
    <li className="loan-card">
      <p className="loan-card__field">Book: {book}</p>
        <p className="loan-card__field">Borrower: {borrower}</p>
        <p className="loan-card__field">Due Date: {dueDate}</p>
      {isOverdue && (
        <span className="loan-card__badge">Overdue</span>
      )}
    </li>
  );
}

export default LoanCard;
