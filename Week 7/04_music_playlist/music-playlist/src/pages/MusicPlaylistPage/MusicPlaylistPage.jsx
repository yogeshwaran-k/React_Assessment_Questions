import SongCard from '../../components/SongCard/SongCard';
import './MusicPlaylistPage.css';

const items = [
  { id: 1, title: 'Horizon Drive', artist: 'Nova Keys', duration: '3:42', isFavorite: true },
  { id: 2, title: 'Quiet Static', artist: 'The Lowlights', duration: '4:05', isFavorite: false },
  { id: 3, title: 'Paper Boats', artist: 'Mira Chen', duration: '3:18', isFavorite: true },
  { id: 4, title: 'Night Signal', artist: 'Echo Parade', duration: '3:56', isFavorite: false }
];

function MusicPlaylistPage() {
  return (
    <main className="music-playlist">
      <section className="music-playlist__container">
        <header className="music-playlist__header">
          <h1 className="music-playlist__title">Music Playlist Panel</h1>
          <p className="music-playlist__lead">
            This page demonstrates passing props, reusable components, rendering lists with keys, and conditional rendering.
          </p>
        </header>
        <section className="music-playlist__content">
          <ul className="music-playlist__list">
            {items.map((item) => (
              <SongCard key={item.id} title={item.title} artist={item.artist} duration={item.duration} isFavorite={item.isFavorite} />
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}

export default MusicPlaylistPage;
