import GadgetCard from '../../components/GadgetCard/GadgetCard';
import './GadgetPage.css';

function GadgetPage() {
  return (
    <main className="gadget-page">
      <section className="gadget-page__container">
        <header className="gadget-page__header">
          <h1 className="gadget-page__title">Gadget Review Panel</h1>
          <p className="gadget-page__lead">
            This page demonstrates JSX rendering and the difference between functional and class components.
          </p>
        </header>
        <section className="gadget-page__content">
          <GadgetCard />
        </section>
      </section>
    </main>
  );
}

export default GadgetPage;
