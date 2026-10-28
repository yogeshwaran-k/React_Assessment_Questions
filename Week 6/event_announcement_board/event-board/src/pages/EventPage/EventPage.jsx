import EventCard from '../../components/EventCard/EventCard';
import './EventPage.css';

function EventPage() {
  return (
    <main className="event-page">
      <section className="event-page__container">
        <header className="event-page__header">
          <h1 className="event-page__title">Event Announcement Board</h1>
          <p className="event-page__lead">
            This page demonstrates JSX rendering and the difference between functional and class components.
          </p>
        </header>
        <section className="event-page__content">
          <EventCard />
        </section>
      </section>
    </main>
  );
}

export default EventPage;
