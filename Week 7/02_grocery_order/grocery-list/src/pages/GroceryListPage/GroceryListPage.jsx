import GroceryItemCard from '../../components/GroceryItemCard/GroceryItemCard';
import './GroceryListPage.css';

const items = [
  { id: 1, name: 'Spinach', quantity: '500 g', price: 'Rs. 30', isOrganic: true },
  { id: 2, name: 'Whole Wheat Flour', quantity: '1 kg', price: 'Rs. 55', isOrganic: false },
  { id: 3, name: 'Bananas', quantity: '6 pcs', price: 'Rs. 40', isOrganic: true },
  { id: 4, name: 'Toor Dal', quantity: '1 kg', price: 'Rs. 140', isOrganic: false }
];

function GroceryListPage() {
  return (
    <main className="grocery-list">
      <section className="grocery-list__container">
        <header className="grocery-list__header">
          <h1 className="grocery-list__title">Grocery Order List</h1>
          <p className="grocery-list__lead">
            This page demonstrates passing props, reusable components, rendering lists with keys, and conditional rendering.
          </p>
        </header>
        <section className="grocery-list__content">
          <ul className="grocery-list__list">
            {items.map((item) => (
              <GroceryItemCard key={item.id} name={item.name} quantity={item.quantity} price={item.price} isOrganic={item.isOrganic} />
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}

export default GroceryListPage;
