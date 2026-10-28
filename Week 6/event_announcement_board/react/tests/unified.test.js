import { render, screen } from '@testing-library/react';
import App from '../App';
import EventPage from '../pages/EventPage/EventPage';
import EventCard from '../components/EventCard/EventCard';

describe('Event Announcement Board (Structure & Functionality)', () => {
  // ---------- Structure (4) ----------

  it('renders_main_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main.event-page')).toBeInTheDocument();
  });

  it('renders_header_section', () => {
    const { container } = render(<App />);
    expect(container.querySelector('header.event-page__header')).toBeInTheDocument();
    expect(container.querySelector('section.event-page__content')).toBeInTheDocument();
  });

  it('renders_heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Event Announcement Board' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Event Details' })
    ).toBeInTheDocument();
  });

  it('renders_description_text', () => {
    render(<App />);
    expect(
      screen.getByText('This page demonstrates JSX rendering and the difference between functional and class components.')
    ).toBeInTheDocument();
  });

  // ---------- Functionality (6) ----------

  it('implements_functional_page', () => {
    expect(typeof EventPage).toBe('function');
    expect(!EventPage.prototype || !EventPage.prototype.isReactComponent).toBe(true);
  });

  it('implements_class_card', () => {
    expect(typeof EventCard).toBe('function');
    expect(EventCard.prototype && EventCard.prototype.isReactComponent).toBeTruthy();
  });

  it('card_renders_standalone_data', () => {
    render(<EventCard />);
    expect(screen.getByText('Event: Tech Innovators Meetup')).toBeInTheDocument();
    expect(screen.getByText('Date: Nov 15, 2026')).toBeInTheDocument();
    expect(screen.getByText('Venue: Grand Convention Center')).toBeInTheDocument();
    expect(screen.getByText('Organizer: Developer Circle')).toBeInTheDocument();
  });

  it('card_shows_conditional_badge', () => {
    render(<EventCard />);
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });

  it('renders_data_in_order', () => {
    render(<App />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(4);
    expect(items.map((item) => item.textContent)).toEqual([
      'Event: Tech Innovators Meetup',
      'Date: Nov 15, 2026',
      'Venue: Grand Convention Center',
      'Organizer: Developer Circle'
    ]);
  });

  it('no_interactive_elements', () => {
    render(<App />);
    expect(screen.queryAllByRole('button')).toHaveLength(0);
    expect(screen.queryAllByRole('textbox')).toHaveLength(0);
  });
});
