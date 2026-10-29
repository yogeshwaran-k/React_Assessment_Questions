import { render, screen } from '@testing-library/react';
import App from '../App';
import PodcastListPage from '../pages/PodcastListPage/PodcastListPage';
import EpisodeCard from '../components/EpisodeCard/EpisodeCard';

describe('Podcast Episode List (Props, Reusable Components, Lists & Conditional Rendering)', () => {
  // ---------- Structure (4) ----------

  it('renders_main_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main.podcast-list')).toBeInTheDocument();
  });

  it('renders_header_section', () => {
    const { container } = render(<App />);
    expect(container.querySelector('header.podcast-list__header')).toBeInTheDocument();
    expect(container.querySelector('section.podcast-list__content')).toBeInTheDocument();
  });

  it('renders_heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Podcast Episode List' })
    ).toBeInTheDocument();
  });

  it('renders_list_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('ul.podcast-list__list')).toBeInTheDocument();
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
      'Episode: Scaling Small TeamsHost: Priya DesaiDuration: 42 minNew',
      'Episode: The Art of DebuggingHost: Ravi ShankarDuration: 35 min',
      'Episode: Designing for TrustHost: Wei LinDuration: 29 minNew',
      'Episode: Founders on FailureHost: Tara JosephDuration: 48 min'
    ]);
  });

  it('item_component_reads_given_props', () => {
    render(<EpisodeCard title="Sample Title A" host="Sample Host A" duration="Sample Duration A" isNew={true} />);
    expect(screen.getByText('Episode: Sample Title A')).toBeInTheDocument();
    expect(screen.getByText('Host: Sample Host A')).toBeInTheDocument();
    expect(screen.getByText('Duration: Sample Duration A')).toBeInTheDocument();
  });

  it('item_component_updates_with_new_props', () => {
    render(<EpisodeCard title="Sample Title B" host="Sample Host B" duration="Sample Duration B" isNew={true} />);
    expect(screen.getByText('Episode: Sample Title B')).toBeInTheDocument();
    expect(screen.getByText('Host: Sample Host B')).toBeInTheDocument();
    expect(screen.getByText('Duration: Sample Duration B')).toBeInTheDocument();
    expect(screen.queryByText('Episode: Sample Title A')).not.toBeInTheDocument();
    expect(screen.queryByText('Host: Sample Host A')).not.toBeInTheDocument();
    expect(screen.queryByText('Duration: Sample Duration A')).not.toBeInTheDocument();
  });

  it('conditionally_renders_badge_when_true', () => {
    render(<EpisodeCard title="Demo title" host="Demo host" duration="Demo duration" isNew={true} />);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('conditionally_hides_badge_when_false', () => {
    render(<EpisodeCard title="Demo title" host="Demo host" duration="Demo duration" isNew={false} />);
    expect(screen.queryByText('New')).not.toBeInTheDocument();
  });
});
