import React from 'react';
import './ProfileCard.css';

class ProfileCard extends React.Component {
  render() {
    const name = 'Alex Johnson';
    const role = 'Frontend Developer';
    const email = 'alex.johnson@example.com';
    const experience = '3 years';
    const isFeatured = true;

    return (
      <article className="profile-card">
        <h2 className="profile-card__heading">Developer Information</h2>
        <ul className="profile-card__details">
          <li>Name: {name}</li>
          <li>Role: {role}</li>
          <li>Email: {email}</li>
          <li>Experience: {experience}</li>
        </ul>
        {isFeatured && (
          <p className="profile-card__badge">Featured</p>
        )}
      </article>
    );
  }
}

export default ProfileCard;
