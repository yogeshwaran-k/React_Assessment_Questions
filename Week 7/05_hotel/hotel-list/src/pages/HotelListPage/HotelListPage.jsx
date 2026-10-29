import HotelCard from '../../components/HotelCard/HotelCard';
import './HotelListPage.css';

const items = [
  { id: 1, name: 'Lakeview Residency', city: 'Udaipur', pricePerNight: 'Rs. 3200', isAvailable: true },
  { id: 2, name: 'Palm Grove Inn', city: 'Kochi', pricePerNight: 'Rs. 2100', isAvailable: false },
  { id: 3, name: 'Cedar Heights Hotel', city: 'Shimla', pricePerNight: 'Rs. 2800', isAvailable: true },
  { id: 4, name: 'Harbor View Suites', city: 'Goa', pricePerNight: 'Rs. 4100', isAvailable: false }
];

function HotelListPage() {
  return (
    <main className="hotel-list">
      <section className="hotel-list__container">
        <header className="hotel-list__header">
          <h1 className="hotel-list__title">Hotel Booking List</h1>
          <p className="hotel-list__lead">
            This page demonstrates passing props, reusable components, rendering lists with keys, and conditional rendering.
          </p>
        </header>
        <section className="hotel-list__content">
          <ul className="hotel-list__list">
            {items.map((item) => (
              <HotelCard key={item.id} name={item.name} city={item.city} pricePerNight={item.pricePerNight} isAvailable={item.isAvailable} />
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}

export default HotelListPage;
