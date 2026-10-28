import DishCard from '../../components/DishCard/DishCard';
import './MenuPage.css';

function MenuPage() {
  return (
    <main className="menu-page">
      <section className="menu-page__container">
        <header className="menu-page__header">
          <h1 className="menu-page__title">Restaurant Menu Spotlight</h1>
          <p className="menu-page__lead">
            This page demonstrates JSX rendering and the difference between functional and class components.
          </p>
        </header>
        <section className="menu-page__content">
          <DishCard />
        </section>
      </section>
    </main>
  );
}

export default MenuPage;
