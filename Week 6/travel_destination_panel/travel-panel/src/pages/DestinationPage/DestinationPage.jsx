import DestinationCard from '../../components/DestinationCard/DestinationCard';
import './DestinationPage.css';

function DestinationPage() {
  return (
    <main className="destination-page">
      <section className="destination-page__container">
        <header className="destination-page__header">
          <h1 className="destination-page__title">Travel Destination Panel</h1>
          <p className="destination-page__lead">
            This page demonstrates JSX rendering and the difference between functional and class components.
          </p>
        </header>
        <section className="destination-page__content">
          <DestinationCard />
        </section>
      </section>
    </main>
  );
}

export default DestinationPage;
