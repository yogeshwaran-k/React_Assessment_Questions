import { render, screen } from '@testing-library/react';
import App from '../App';
import FlightListPage from '../pages/FlightListPage/FlightListPage';
import FlightCard from '../components/FlightCard/FlightCard';

describe('Flight Schedule List (Props, Reusable Components, Lists & Conditional Rendering)', () => {
  // ---------- Structure (4) ----------

  it('renders_main_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main.flight-list')).toBeInTheDocument();
  });

  it('renders_header_section', () => {
    const { container } = render(<App />);
    expect(container.querySelector('header.flight-list__header')).toBeInTheDocument();
    expect(container.querySelector('section.flight-list__content')).toBeInTheDocument();
  });

  it('renders_heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Flight Schedule List' })
    ).toBeInTheDocument();
  });

  it('renders_list_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('ul.flight-list__list')).toBeInTheDocument();
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
      'Flight: AI 202Origin: ChennaiDestination: Delhi',
      'Flight: 6E 341Origin: MumbaiDestination: BengaluruDelayed',
      'Flight: SG 118Origin: KolkataDestination: Hyderabad',
      'Flight: UK 955Origin: PuneDestination: JaipurDelayed'
    ]);
  });

  it('item_component_reads_given_props', () => {
    render(<FlightCard flight="Sample Flight A" origin="Sample Origin A" destination="Sample Destination A" isDelayed={true} />);
    expect(screen.getByText('Flight: Sample Flight A')).toBeInTheDocument();
    expect(screen.getByText('Origin: Sample Origin A')).toBeInTheDocument();
    expect(screen.getByText('Destination: Sample Destination A')).toBeInTheDocument();
  });

  it('item_component_updates_with_new_props', () => {
    render(<FlightCard flight="Sample Flight B" origin="Sample Origin B" destination="Sample Destination B" isDelayed={true} />);
    expect(screen.getByText('Flight: Sample Flight B')).toBeInTheDocument();
    expect(screen.getByText('Origin: Sample Origin B')).toBeInTheDocument();
    expect(screen.getByText('Destination: Sample Destination B')).toBeInTheDocument();
    expect(screen.queryByText('Flight: Sample Flight A')).not.toBeInTheDocument();
    expect(screen.queryByText('Origin: Sample Origin A')).not.toBeInTheDocument();
    expect(screen.queryByText('Destination: Sample Destination A')).not.toBeInTheDocument();
  });

  it('conditionally_renders_badge_when_true', () => {
    render(<FlightCard flight="Demo flight" origin="Demo origin" destination="Demo destination" isDelayed={true} />);
    expect(screen.getByText('Delayed')).toBeInTheDocument();
  });

  it('conditionally_hides_badge_when_false', () => {
    render(<FlightCard flight="Demo flight" origin="Demo origin" destination="Demo destination" isDelayed={false} />);
    expect(screen.queryByText('Delayed')).not.toBeInTheDocument();
  });
});
