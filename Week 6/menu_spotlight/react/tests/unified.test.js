import { render, screen } from '@testing-library/react';
import App from '../App';
import MenuPage from '../pages/MenuPage/MenuPage';
import DishCard from '../components/DishCard/DishCard';

describe('Restaurant Menu Spotlight (Structure & Functionality)', () => {
  // ---------- Structure (4) ----------

  it('renders_main_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main.menu-page')).toBeInTheDocument();
  });

  it('renders_header_section', () => {
    const { container } = render(<App />);
    expect(container.querySelector('header.menu-page__header')).toBeInTheDocument();
    expect(container.querySelector('section.menu-page__content')).toBeInTheDocument();
  });

  it('renders_heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Restaurant Menu Spotlight' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Dish Details' })
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
    expect(typeof MenuPage).toBe('function');
    expect(!MenuPage.prototype || !MenuPage.prototype.isReactComponent).toBe(true);
  });

  it('implements_class_card', () => {
    expect(typeof DishCard).toBe('function');
    expect(DishCard.prototype && DishCard.prototype.isReactComponent).toBeTruthy();
  });

  it('card_renders_standalone_data', () => {
    render(<DishCard />);
    expect(screen.getByText('Dish: Paneer Butter Masala')).toBeInTheDocument();
    expect(screen.getByText('Cuisine: North Indian')).toBeInTheDocument();
    expect(screen.getByText('Price: Rs. 220')).toBeInTheDocument();
    expect(screen.getByText('Spice Level: Medium')).toBeInTheDocument();
  });

  it('card_shows_conditional_badge', () => {
    render(<DishCard />);
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });

  it('renders_data_in_order', () => {
    render(<App />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(4);
    expect(items.map((item) => item.textContent)).toEqual([
      'Dish: Paneer Butter Masala',
      'Cuisine: North Indian',
      'Price: Rs. 220',
      'Spice Level: Medium'
    ]);
  });

  it('no_interactive_elements', () => {
    render(<App />);
    expect(screen.queryAllByRole('button')).toHaveLength(0);
    expect(screen.queryAllByRole('textbox')).toHaveLength(0);
  });
});
