import { render, screen } from '@testing-library/react';
import App from '../App';
import MoviePage from '../pages/MoviePage/MoviePage';
import MovieCard from '../components/MovieCard/MovieCard';

describe('Movie Spotlight Panel (Structure & Functionality)', () => {
  // ---------- Structure (4) ----------

  it('renders_main_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main.movie-page')).toBeInTheDocument();
  });

  it('renders_header_section', () => {
    const { container } = render(<App />);
    expect(container.querySelector('header.movie-page__header')).toBeInTheDocument();
    expect(container.querySelector('section.movie-page__content')).toBeInTheDocument();
  });

  it('renders_heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Movie Spotlight Panel' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Movie Details' })
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
    expect(typeof MoviePage).toBe('function');
    expect(!MoviePage.prototype || !MoviePage.prototype.isReactComponent).toBe(true);
  });

  it('implements_class_card', () => {
    expect(typeof MovieCard).toBe('function');
    expect(MovieCard.prototype && MovieCard.prototype.isReactComponent).toBeTruthy();
  });

  it('card_renders_standalone_data', () => {
    render(<MovieCard />);
    expect(screen.getByText('Title: The Silent Horizon')).toBeInTheDocument();
    expect(screen.getByText('Genre: Sci-Fi')).toBeInTheDocument();
    expect(screen.getByText('Director: Maria Chen')).toBeInTheDocument();
    expect(screen.getByText('Rating: 4.7/5')).toBeInTheDocument();
  });

  it('card_shows_conditional_badge', () => {
    render(<MovieCard />);
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });

  it('renders_data_in_order', () => {
    render(<App />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(4);
    expect(items.map((item) => item.textContent)).toEqual([
      'Title: The Silent Horizon',
      'Genre: Sci-Fi',
      'Director: Maria Chen',
      'Rating: 4.7/5'
    ]);
  });

  it('no_interactive_elements', () => {
    render(<App />);
    expect(screen.queryAllByRole('button')).toHaveLength(0);
    expect(screen.queryAllByRole('textbox')).toHaveLength(0);
  });
});
