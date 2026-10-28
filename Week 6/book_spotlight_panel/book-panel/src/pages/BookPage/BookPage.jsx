import BookCard from '../../components/BookCard/BookCard';
import './BookPage.css';

function BookPage() {
  return (
    <main className="book-page">
      <section className="book-page__container">
        <header className="book-page__header">
          <h1 className="book-page__title">Book Spotlight Panel</h1>
          <p className="book-page__lead">
            This page demonstrates JSX rendering and the difference between functional and class components.
          </p>
        </header>
        <section className="book-page__content">
          <BookCard />
        </section>
      </section>
    </main>
  );
}

export default BookPage;
