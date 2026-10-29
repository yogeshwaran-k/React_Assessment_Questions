import MatchCard from '../../components/MatchCard/MatchCard';
import './MatchListPage.css';

const items = [
  { id: 1, match: 'Titans vs Falcons', league: 'City Premier League', date: 'Oct 23, 2026', isLive: true },
  { id: 2, match: 'Harbor FC vs River United', league: 'Coastal Cup', date: 'Oct 25, 2026', isLive: false },
  { id: 3, match: 'Ridgeback vs Comet Sports', league: 'City Premier League', date: 'Oct 23, 2026', isLive: true },
  { id: 4, match: 'North Stars vs Blaze FC', league: 'Coastal Cup', date: 'Oct 28, 2026', isLive: false }
];

function MatchListPage() {
  return (
    <main className="match-list">
      <section className="match-list__container">
        <header className="match-list__header">
          <h1 className="match-list__title">Sports Match List</h1>
          <p className="match-list__lead">
            This page demonstrates passing props, reusable components, rendering lists with keys, and conditional rendering.
          </p>
        </header>
        <section className="match-list__content">
          <ul className="match-list__list">
            {items.map((item) => (
              <MatchCard key={item.id} match={item.match} league={item.league} date={item.date} isLive={item.isLive} />
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}

export default MatchListPage;
