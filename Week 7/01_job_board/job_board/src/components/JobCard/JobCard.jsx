import React from 'react';
import './JobCard.css';

function JobCard({ role, company, location, isRemote }) {
  return (
    <li className="job-card">
      <p className="job-card__field">Role: {role}</p>
        <p className="job-card__field">Company: {company}</p>
        <p className="job-card__field">Location: {location}</p>
      {isRemote && (
        <span className="job-card__badge">Remote</span>
      )}
    </li>
  );
}

export default JobCard;
