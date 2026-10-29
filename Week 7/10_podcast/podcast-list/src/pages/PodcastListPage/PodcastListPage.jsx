import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';
import './PodcastListPage.css';

const items = [
  { id: 1, title: 'Scaling Small Teams', host: 'Priya Desai', duration: '42 min', isNew: true },
  { id: 2, title: 'The Art of Debugging', host: 'Ravi Shankar', duration: '35 min', isNew: false },
  { id: 3, title: 'Designing for Trust', host: 'Wei Lin', duration: '29 min', isNew: true },
  { id: 4, title: 'Founders on Failure', host: 'Tara Joseph', duration: '48 min', isNew: false }
];

function PodcastListPage() {
  return (
    <main className="podcast-list">
      <section className="podcast-list__container">
        <header className="podcast-list__header">
          <h1 className="podcast-list__title">Podcast Episode List</h1>
          <p className="podcast-list__lead">
            This page demonstrates passing props, reusable components, rendering lists with keys, and conditional rendering.
          </p>
        </header>
        <section className="podcast-list__content">
          <ul className="podcast-list__list">
            {items.map((item) => (
              <EpisodeCard key={item.id} title={item.title} host={item.host} duration={item.duration} isNew={item.isNew} />
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}

export default PodcastListPage;
