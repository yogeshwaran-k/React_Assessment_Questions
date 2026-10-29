import ForecastCard from '../../components/ForecastCard/ForecastCard';
import './WeatherListPage.css';

const items = [
  { id: 1, city: 'Chennai', condition: 'Thunderstorms', temperature: '29C', isRainy: true },
  { id: 2, city: 'Delhi', condition: 'Clear Sky', temperature: '22C', isRainy: false },
  { id: 3, city: 'Mumbai', condition: 'Heavy Showers', temperature: '27C', isRainy: true },
  { id: 4, city: 'Bengaluru', condition: 'Partly Cloudy', temperature: '24C', isRainy: false }
];

function WeatherListPage() {
  return (
    <main className="weather-list">
      <section className="weather-list__container">
        <header className="weather-list__header">
          <h1 className="weather-list__title">Weather Forecast List</h1>
          <p className="weather-list__lead">
            This page demonstrates passing props, reusable components, rendering lists with keys, and conditional rendering.
          </p>
        </header>
        <section className="weather-list__content">
          <ul className="weather-list__list">
            {items.map((item) => (
              <ForecastCard key={item.id} city={item.city} condition={item.condition} temperature={item.temperature} isRainy={item.isRainy} />
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}

export default WeatherListPage;
