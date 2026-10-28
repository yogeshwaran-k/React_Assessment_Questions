import { render, screen } from '@testing-library/react';
import App from '../App';
import ProductPage from '../pages/ProductPage/ProductPage';
import ProductCard from '../components/ProductCard/ProductCard';

describe('Product Highlight Board (Structure & Functionality)', () => {
  // ---------- Structure (4) ----------

  it('renders_main_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main.product-page')).toBeInTheDocument();
  });

  it('renders_header_section', () => {
    const { container } = render(<App />);
    expect(container.querySelector('header.product-page__header')).toBeInTheDocument();
    expect(container.querySelector('section.product-page__content')).toBeInTheDocument();
  });

  it('renders_heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Product Highlight Board' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Product Details' })
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
    expect(typeof ProductPage).toBe('function');
    expect(!ProductPage.prototype || !ProductPage.prototype.isReactComponent).toBe(true);
  });

  it('implements_class_card', () => {
    expect(typeof ProductCard).toBe('function');
    expect(ProductCard.prototype && ProductCard.prototype.isReactComponent).toBeTruthy();
  });

  it('card_renders_standalone_data', () => {
    render(<ProductCard />);
    expect(screen.getByText('Name: Wireless Headphones')).toBeInTheDocument();
    expect(screen.getByText('Category: Electronics')).toBeInTheDocument();
    expect(screen.getByText('Price: $59.99')).toBeInTheDocument();
    expect(screen.getByText('Rating: 4.5 Stars')).toBeInTheDocument();
  });

  it('card_shows_conditional_badge', () => {
    render(<ProductCard />);
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });

  it('renders_data_in_order', () => {
    render(<App />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(4);
    expect(items.map((item) => item.textContent)).toEqual([
      'Name: Wireless Headphones',
      'Category: Electronics',
      'Price: $59.99',
      'Rating: 4.5 Stars'
    ]);
  });

  it('no_interactive_elements', () => {
    render(<App />);
    expect(screen.queryAllByRole('button')).toHaveLength(0);
    expect(screen.queryAllByRole('textbox')).toHaveLength(0);
  });
});
