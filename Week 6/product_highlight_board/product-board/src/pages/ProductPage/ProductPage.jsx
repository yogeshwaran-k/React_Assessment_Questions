import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductPage.css';

function ProductPage() {
  return (
    <main className="product-page">
      <section className="product-page__container">
        <header className="product-page__header">
          <h1 className="product-page__title">Product Highlight Board</h1>
          <p className="product-page__lead">
            This page demonstrates JSX rendering and the difference between functional and class components.
          </p>
        </header>
        <section className="product-page__content">
          <ProductCard />
        </section>
      </section>
    </main>
  );
}

export default ProductPage;
