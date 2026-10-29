import { render, screen } from '@testing-library/react';
import App from '../App';
import MatchListPage from '../pages/MatchListPage/MatchListPage';
import MatchCard from '../components/MatchCard/MatchCard';

describe('Sports Match List (Props, Reusable Components, Lists & Conditional Rendering)', () => {
  // ---------- Structure (4) ----------

  it('renders_main_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main.match-list')).toBeInTheDocument();
  });

  it('renders_header_section', () => {
    const { container } = render(<App />);
    expect(container.querySelector('header.match-list__header')).toBeInTheDocument();
    expect(container.querySelector('section.match-list__content')).toBeInTheDocument();
  });

  it('renders_heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Sports Match List' })
    ).toBeInTheDocument();
  });

  it('renders_list_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('ul.match-list__list')).toBeInTheDocument();
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
      'Match: Titans vs FalconsLeague: City Premier LeagueDate: Oct 23, 2026Live',
      'Match: Harbor FC vs River UnitedLeague: Coastal CupDate: Oct 25, 2026',
      'Match: Ridgeback vs Comet SportsLeague: City Premier LeagueDate: Oct 23, 2026Live',
      'Match: North Stars vs Blaze FCLeague: Coastal CupDate: Oct 28, 2026'
    ]);
  });

  it('item_component_reads_given_props', () => {
    render(<MatchCard match="Sample Match A" league="Sample League A" date="Sample Date A" isLive={true} />);
    expect(screen.getByText('Match: Sample Match A')).toBeInTheDocument();
    expect(screen.getByText('League: Sample League A')).toBeInTheDocument();
    expect(screen.getByText('Date: Sample Date A')).toBeInTheDocument();
  });

  it('item_component_updates_with_new_props', () => {
    render(<MatchCard match="Sample Match B" league="Sample League B" date="Sample Date B" isLive={true} />);
    expect(screen.getByText('Match: Sample Match B')).toBeInTheDocument();
    expect(screen.getByText('League: Sample League B')).toBeInTheDocument();
    expect(screen.getByText('Date: Sample Date B')).toBeInTheDocument();
    expect(screen.queryByText('Match: Sample Match A')).not.toBeInTheDocument();
    expect(screen.queryByText('League: Sample League A')).not.toBeInTheDocument();
    expect(screen.queryByText('Date: Sample Date A')).not.toBeInTheDocument();
  });

  it('conditionally_renders_badge_when_true', () => {
    render(<MatchCard match="Demo match" league="Demo league" date="Demo date" isLive={true} />);
    expect(screen.getByText('Live')).toBeInTheDocument();
  });

  it('conditionally_hides_badge_when_false', () => {
    render(<MatchCard match="Demo match" league="Demo league" date="Demo date" isLive={false} />);
    expect(screen.queryByText('Live')).not.toBeInTheDocument();
  });
});
