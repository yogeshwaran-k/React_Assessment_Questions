import { render, screen } from '@testing-library/react';
import App from '../App';
import BookPage from '../pages/BookPage/BookPage';
import BookCard from '../components/BookCard/BookCard';

describe('Book Spotlight Panel (Structure & Functionality)', () => {
  // ---------- Structure (4) ----------

  it('renders_main_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main.book-page')).toBeInTheDocument();
  });

  it('renders_header_section', () => {
    const { container } = render(<App />);
    expect(container.querySelector('header.book-page__header')).toBeInTheDocument();
    expect(container.querySelector('section.book-page__content')).toBeInTheDocument();
  });

  it('renders_heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Book Spotlight Panel' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Book Details' })
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
    expect(typeof BookPage).toBe('function');
    expect(!BookPage.prototype || !BookPage.prototype.isReactComponent).toBe(true);
  });

  it('implements_class_card', () => {
    expect(typeof BookCard).toBe('function');
    expect(BookCard.prototype && BookCard.prototype.isReactComponent).toBeTruthy();
  });

  it('card_renders_standalone_data', () => {
    render(<BookCard />);
    expect(screen.getByText('Title: The Midnight Library')).toBeInTheDocument();
    expect(screen.getByText('Author: Matt Haig')).toBeInTheDocument();
    expect(screen.getByText('Genre: Fiction')).toBeInTheDocument();
    expect(screen.getByText('Pages: 288 Pages')).toBeInTheDocument();
  });

  it('card_shows_conditional_badge', () => {
    render(<BookCard />);
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });

  it('renders_data_in_order', () => {
    render(<App />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(4);
    expect(items.map((item) => item.textContent)).toEqual([
      'Title: The Midnight Library',
      'Author: Matt Haig',
      'Genre: Fiction',
      'Pages: 288 Pages'
    ]);
  });

  it('no_interactive_elements', () => {
    render(<App />);
    expect(screen.queryAllByRole('button')).toHaveLength(0);
    expect(screen.queryAllByRole('textbox')).toHaveLength(0);
  });
});
