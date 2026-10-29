import { render, screen } from '@testing-library/react';
import App from '../App';
import GroceryListPage from '../pages/GroceryListPage/GroceryListPage';
import GroceryItemCard from '../components/GroceryItemCard/GroceryItemCard';

describe('Grocery Order List (Props, Reusable Components, Lists & Conditional Rendering)', () => {
  // ---------- Structure (4) ----------

  it('renders_main_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main.grocery-list')).toBeInTheDocument();
  });

  it('renders_header_section', () => {
    const { container } = render(<App />);
    expect(container.querySelector('header.grocery-list__header')).toBeInTheDocument();
    expect(container.querySelector('section.grocery-list__content')).toBeInTheDocument();
  });

  it('renders_heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Grocery Order List' })
    ).toBeInTheDocument();
  });

  it('renders_list_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('ul.grocery-list__list')).toBeInTheDocument();
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
      'Item: SpinachQuantity: 500 gPrice: Rs. 30Organic',
      'Item: Whole Wheat FlourQuantity: 1 kgPrice: Rs. 55',
      'Item: BananasQuantity: 6 pcsPrice: Rs. 40Organic',
      'Item: Toor DalQuantity: 1 kgPrice: Rs. 140'
    ]);
  });

  it('item_component_reads_given_props', () => {
    render(<GroceryItemCard name="Sample Name A" quantity="Sample Quantity A" price="Sample Price A" isOrganic={true} />);
    expect(screen.getByText('Item: Sample Name A')).toBeInTheDocument();
    expect(screen.getByText('Quantity: Sample Quantity A')).toBeInTheDocument();
    expect(screen.getByText('Price: Sample Price A')).toBeInTheDocument();
  });

  it('item_component_updates_with_new_props', () => {
    render(<GroceryItemCard name="Sample Name B" quantity="Sample Quantity B" price="Sample Price B" isOrganic={true} />);
    expect(screen.getByText('Item: Sample Name B')).toBeInTheDocument();
    expect(screen.getByText('Quantity: Sample Quantity B')).toBeInTheDocument();
    expect(screen.getByText('Price: Sample Price B')).toBeInTheDocument();
    expect(screen.queryByText('Item: Sample Name A')).not.toBeInTheDocument();
    expect(screen.queryByText('Quantity: Sample Quantity A')).not.toBeInTheDocument();
    expect(screen.queryByText('Price: Sample Price A')).not.toBeInTheDocument();
  });

  it('conditionally_renders_badge_when_true', () => {
    render(<GroceryItemCard name="Demo name" quantity="Demo quantity" price="Demo price" isOrganic={true} />);
    expect(screen.getByText('Organic')).toBeInTheDocument();
  });

  it('conditionally_hides_badge_when_false', () => {
    render(<GroceryItemCard name="Demo name" quantity="Demo quantity" price="Demo price" isOrganic={false} />);
    expect(screen.queryByText('Organic')).not.toBeInTheDocument();
  });
});
