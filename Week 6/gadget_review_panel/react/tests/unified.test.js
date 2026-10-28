import { render, screen } from '@testing-library/react';
import App from '../App';
import GadgetPage from '../pages/GadgetPage/GadgetPage';
import GadgetCard from '../components/GadgetCard/GadgetCard';

describe('Gadget Review Panel (Structure & Functionality)', () => {
  // ---------- Structure (4) ----------

  it('renders_main_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main.gadget-page')).toBeInTheDocument();
  });

  it('renders_header_section', () => {
    const { container } = render(<App />);
    expect(container.querySelector('header.gadget-page__header')).toBeInTheDocument();
    expect(container.querySelector('section.gadget-page__content')).toBeInTheDocument();
  });

  it('renders_heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Gadget Review Panel' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Gadget Details' })
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
    expect(typeof GadgetPage).toBe('function');
    expect(!GadgetPage.prototype || !GadgetPage.prototype.isReactComponent).toBe(true);
  });

  it('implements_class_card', () => {
    expect(typeof GadgetCard).toBe('function');
    expect(GadgetCard.prototype && GadgetCard.prototype.isReactComponent).toBeTruthy();
  });

  it('card_renders_standalone_data', () => {
    render(<GadgetCard />);
    expect(screen.getByText('Gadget: Smart Fitness Band')).toBeInTheDocument();
    expect(screen.getByText('Brand: PulseFit')).toBeInTheDocument();
    expect(screen.getByText('Price: $39.99')).toBeInTheDocument();
    expect(screen.getByText('Review Score: 4.2/5')).toBeInTheDocument();
  });

  it('card_shows_conditional_badge', () => {
    render(<GadgetCard />);
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });

  it('renders_data_in_order', () => {
    render(<App />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(4);
    expect(items.map((item) => item.textContent)).toEqual([
      'Gadget: Smart Fitness Band',
      'Brand: PulseFit',
      'Price: $39.99',
      'Review Score: 4.2/5'
    ]);
  });

  it('no_interactive_elements', () => {
    render(<App />);
    expect(screen.queryAllByRole('button')).toHaveLength(0);
    expect(screen.queryAllByRole('textbox')).toHaveLength(0);
  });
});
