import { render, screen } from '@testing-library/react';
import App from '../App';
import MusicPlaylistPage from '../pages/MusicPlaylistPage/MusicPlaylistPage';
import SongCard from '../components/SongCard/SongCard';

describe('Music Playlist Panel (Props, Reusable Components, Lists & Conditional Rendering)', () => {
  // ---------- Structure (4) ----------

  it('renders_main_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main.music-playlist')).toBeInTheDocument();
  });

  it('renders_header_section', () => {
    const { container } = render(<App />);
    expect(container.querySelector('header.music-playlist__header')).toBeInTheDocument();
    expect(container.querySelector('section.music-playlist__content')).toBeInTheDocument();
  });

  it('renders_heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Music Playlist Panel' })
    ).toBeInTheDocument();
  });

  it('renders_list_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('ul.music-playlist__list')).toBeInTheDocument();
  });

  // ---------- Functionality (6) ----------

  it('renders_reusable_item_for_each_entry', () => {
    render(<App />);
    const entries = screen.getAllByRole('listitem');
    expect(entries).toHaveLength(4);
  });

  it('renders_items_in_order', () => {
    render(<App />);
    const entries = screen.getAllByRole('listitem');
    expect(entries.map((entry) => entry.textContent)).toEqual([
      'Song: Horizon DriveArtist: Nova KeysDuration: 3:42Favorite',
      'Song: Quiet StaticArtist: The LowlightsDuration: 4:05',
      'Song: Paper BoatsArtist: Mira ChenDuration: 3:18Favorite',
      'Song: Night SignalArtist: Echo ParadeDuration: 3:56'
    ]);
  });

  it('item_component_reads_given_props', () => {
    render(<SongCard title="Sample Title A" artist="Sample Artist A" duration="Sample Duration A" isFavorite={true} />);
    expect(screen.getByText('Song: Sample Title A')).toBeInTheDocument();
    expect(screen.getByText('Artist: Sample Artist A')).toBeInTheDocument();
    expect(screen.getByText('Duration: Sample Duration A')).toBeInTheDocument();
  });

  it('item_component_updates_with_new_props', () => {
    render(<SongCard title="Sample Title B" artist="Sample Artist B" duration="Sample Duration B" isFavorite={true} />);
    expect(screen.getByText('Song: Sample Title B')).toBeInTheDocument();
    expect(screen.getByText('Artist: Sample Artist B')).toBeInTheDocument();
    expect(screen.getByText('Duration: Sample Duration B')).toBeInTheDocument();
    expect(screen.queryByText('Song: Sample Title A')).not.toBeInTheDocument();
    expect(screen.queryByText('Artist: Sample Artist A')).not.toBeInTheDocument();
    expect(screen.queryByText('Duration: Sample Duration A')).not.toBeInTheDocument();
  });

  it('conditionally_renders_badge_when_true', () => {
    render(<SongCard title="Demo title" artist="Demo artist" duration="Demo duration" isFavorite={true} />);
    expect(screen.getByText('Favorite')).toBeInTheDocument();
  });

  it('conditionally_hides_badge_when_false', () => {
    render(<SongCard title="Demo title" artist="Demo artist" duration="Demo duration" isFavorite={false} />);
    expect(screen.queryByText('Favorite')).not.toBeInTheDocument();
  });
});
