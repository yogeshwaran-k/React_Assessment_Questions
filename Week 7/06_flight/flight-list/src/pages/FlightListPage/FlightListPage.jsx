import FlightCard from '../../components/FlightCard/FlightCard';
import './FlightListPage.css';

const items = [
  { id: 1, flight: 'AI 202', origin: 'Chennai', destination: 'Delhi', isDelayed: false },
  { id: 2, flight: '6E 341', origin: 'Mumbai', destination: 'Bengaluru', isDelayed: true },
  { id: 3, flight: 'SG 118', origin: 'Kolkata', destination: 'Hyderabad', isDelayed: false },
  { id: 4, flight: 'UK 955', origin: 'Pune', destination: 'Jaipur', isDelayed: true }
];

function FlightListPage() {
  return (
    <main className="flight-list">
      <section className="flight-list__container">
        <header className="flight-list__header">
          <h1 className="flight-list__title">Flight Schedule List</h1>
          <p className="flight-list__lead">
            This page demonstrates passing props, reusable components, rendering lists with keys, and conditional rendering.
          </p>
        </header>
        <section className="flight-list__content">
          <ul className="flight-list__list">
            {items.map((item) => (
              <FlightCard key={item.id} flight={item.flight} origin={item.origin} destination={item.destination} isDelayed={item.isDelayed} />
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}

export default FlightListPage;
