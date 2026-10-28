import { render, screen } from '@testing-library/react';
import App from '../App';
import DestinationPage from '../pages/DestinationPage/DestinationPage';
import DestinationCard from '../components/DestinationCard/DestinationCard';

describe('Travel Destination Panel (Structure & Functionality)', () => {
  // ---------- Structure (4) ----------

  it('renders_main_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main.destination-page')).toBeInTheDocument();
  });

  it('renders_header_section', () => {
    const { container } = render(<App />);
    expect(container.querySelector('header.destination-page__header')).toBeInTheDocument();
    expect(container.querySelector('section.destination-page__content')).toBeInTheDocument();
  });

  it('renders_heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Travel Destination Panel' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Destination Details' })
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
    expect(typeof DestinationPage).toBe('function');
    expect(!DestinationPage.prototype || !DestinationPage.prototype.isReactComponent).toBe(true);
  });

  it('implements_class_card', () => {
    expect(typeof DestinationCard).toBe('function');
    expect(DestinationCard.prototype && DestinationCard.prototype.isReactComponent).toBeTruthy();
  });

  it('card_renders_standalone_data', () => {
    render(<DestinationCard />);
    expect(screen.getByText('Place: Santorini')).toBeInTheDocument();
    expect(screen.getByText('Country: Greece')).toBeInTheDocument();
    expect(screen.getByText('Best Season: Summer')).toBeInTheDocument();
    expect(screen.getByText('Rating: 4.8/5')).toBeInTheDocument();
  });

  it('card_shows_conditional_badge', () => {
    render(<DestinationCard />);
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });

  it('renders_data_in_order', () => {
    render(<App />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(4);
    expect(items.map((item) => item.textContent)).toEqual([
      'Place: Santorini',
      'Country: Greece',
      'Best Season: Summer',
      'Rating: 4.8/5'
    ]);
  });

  it('no_interactive_elements', () => {
    render(<App />);
    expect(screen.queryAllByRole('button')).toHaveLength(0);
    expect(screen.queryAllByRole('textbox')).toHaveLength(0);
  });
});
