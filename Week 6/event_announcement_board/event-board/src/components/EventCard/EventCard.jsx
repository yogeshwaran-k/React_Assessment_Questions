import React from 'react';
import './EventCard.css';

class EventCard extends React.Component {
  render() {
    const event = 'Tech Innovators Meetup';
    const date = 'Nov 15, 2026';
    const venue = 'Grand Convention Center';
    const organizer = 'Developer Circle';
    const isFeatured = true;

    return (
      <article className="event-card">
        <h2 className="event-card__heading">Event Details</h2>
        <ul className="event-card__details">
          <li>Event: {event}</li>
          <li>Date: {date}</li>
          <li>Venue: {venue}</li>
          <li>Organizer: {organizer}</li>
        </ul>
        {isFeatured && (
          <p className="event-card__badge">Featured</p>
        )}
      </article>
    );
  }
}

export default EventCard;
