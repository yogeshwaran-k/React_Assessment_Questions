import LoanCard from '../../components/LoanCard/LoanCard';
import './LibraryListPage.css';

const items = [
  { id: 1, book: 'Clean Code', borrower: 'Aditya Verma', dueDate: 'Oct 10, 2026', isOverdue: true },
  { id: 2, book: 'Sapiens', borrower: 'Meera Nair', dueDate: 'Nov 2, 2026', isOverdue: false },
  { id: 3, book: 'The Pragmatic Programmer', borrower: 'Zoya Khan', dueDate: 'Oct 18, 2026', isOverdue: true },
  { id: 4, book: 'Deep Work', borrower: 'Sanjay Gupta', dueDate: 'Nov 5, 2026', isOverdue: false }
];

function LibraryListPage() {
  return (
    <main className="library-list">
      <section className="library-list__container">
        <header className="library-list__header">
          <h1 className="library-list__title">Library Loan List</h1>
          <p className="library-list__lead">
            This page demonstrates passing props, reusable components, rendering lists with keys, and conditional rendering.
          </p>
        </header>
        <section className="library-list__content">
          <ul className="library-list__list">
            {items.map((item) => (
              <LoanCard key={item.id} book={item.book} borrower={item.borrower} dueDate={item.dueDate} isOverdue={item.isOverdue} />
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}

export default LibraryListPage;
