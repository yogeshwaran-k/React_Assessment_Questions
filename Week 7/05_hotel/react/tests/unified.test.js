import { render, screen } from '@testing-library/react';
import App from '../App';
import HotelListPage from '../pages/HotelListPage/HotelListPage';
import HotelCard from '../components/HotelCard/HotelCard';

describe('Hotel Booking List (Props, Reusable Components, Lists & Conditional Rendering)', () => {
  // ---------- Structure (4) ----------

  it('renders_main_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main.hotel-list')).toBeInTheDocument();
  });

  it('renders_header_section', () => {
    const { container } = render(<App />);
    expect(container.querySelector('header.hotel-list__header')).toBeInTheDocument();
    expect(container.querySelector('section.hotel-list__content')).toBeInTheDocument();
  });

  it('renders_heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Hotel Booking List' })
    ).toBeInTheDocument();
  });

  it('renders_list_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('ul.hotel-list__list')).toBeInTheDocument();
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
      'Hotel: Lakeview ResidencyCity: UdaipurPrice Per Night: Rs. 3200Available',
      'Hotel: Palm Grove InnCity: KochiPrice Per Night: Rs. 2100',
      'Hotel: Cedar Heights HotelCity: ShimlaPrice Per Night: Rs. 2800Available',
      'Hotel: Harbor View SuitesCity: GoaPrice Per Night: Rs. 4100'
    ]);
  });

  it('item_component_reads_given_props', () => {
    render(<HotelCard name="Sample Name A" city="Sample City A" pricePerNight="Sample Pricepernight A" isAvailable={true} />);
    expect(screen.getByText('Hotel: Sample Name A')).toBeInTheDocument();
    expect(screen.getByText('City: Sample City A')).toBeInTheDocument();
    expect(screen.getByText('Price Per Night: Sample Pricepernight A')).toBeInTheDocument();
  });

  it('item_component_updates_with_new_props', () => {
    render(<HotelCard name="Sample Name B" city="Sample City B" pricePerNight="Sample Pricepernight B" isAvailable={true} />);
    expect(screen.getByText('Hotel: Sample Name B')).toBeInTheDocument();
    expect(screen.getByText('City: Sample City B')).toBeInTheDocument();
    expect(screen.getByText('Price Per Night: Sample Pricepernight B')).toBeInTheDocument();
    expect(screen.queryByText('Hotel: Sample Name A')).not.toBeInTheDocument();
    expect(screen.queryByText('City: Sample City A')).not.toBeInTheDocument();
    expect(screen.queryByText('Price Per Night: Sample Pricepernight A')).not.toBeInTheDocument();
  });

  it('conditionally_renders_badge_when_true', () => {
    render(<HotelCard name="Demo name" city="Demo city" pricePerNight="Demo pricePerNight" isAvailable={true} />);
    expect(screen.getByText('Available')).toBeInTheDocument();
  });

  it('conditionally_hides_badge_when_false', () => {
    render(<HotelCard name="Demo name" city="Demo city" pricePerNight="Demo pricePerNight" isAvailable={false} />);
    expect(screen.queryByText('Available')).not.toBeInTheDocument();
  });
});
