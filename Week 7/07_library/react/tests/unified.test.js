import { render, screen } from '@testing-library/react';
import App from '../App';
import LibraryListPage from '../pages/LibraryListPage/LibraryListPage';
import LoanCard from '../components/LoanCard/LoanCard';

describe('Library Loan List (Props, Reusable Components, Lists & Conditional Rendering)', () => {
  // ---------- Structure (4) ----------

  it('renders_main_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main.library-list')).toBeInTheDocument();
  });

  it('renders_header_section', () => {
    const { container } = render(<App />);
    expect(container.querySelector('header.library-list__header')).toBeInTheDocument();
    expect(container.querySelector('section.library-list__content')).toBeInTheDocument();
  });

  it('renders_heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Library Loan List' })
    ).toBeInTheDocument();
  });

  it('renders_list_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('ul.library-list__list')).toBeInTheDocument();
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
      'Book: Clean CodeBorrower: Aditya VermaDue Date: Oct 10, 2026Overdue',
      'Book: SapiensBorrower: Meera NairDue Date: Nov 2, 2026',
      'Book: The Pragmatic ProgrammerBorrower: Zoya KhanDue Date: Oct 18, 2026Overdue',
      'Book: Deep WorkBorrower: Sanjay GuptaDue Date: Nov 5, 2026'
    ]);
  });

  it('item_component_reads_given_props', () => {
    render(<LoanCard book="Sample Book A" borrower="Sample Borrower A" dueDate="Sample Duedate A" isOverdue={true} />);
    expect(screen.getByText('Book: Sample Book A')).toBeInTheDocument();
    expect(screen.getByText('Borrower: Sample Borrower A')).toBeInTheDocument();
    expect(screen.getByText('Due Date: Sample Duedate A')).toBeInTheDocument();
  });

  it('item_component_updates_with_new_props', () => {
    render(<LoanCard book="Sample Book B" borrower="Sample Borrower B" dueDate="Sample Duedate B" isOverdue={true} />);
    expect(screen.getByText('Book: Sample Book B')).toBeInTheDocument();
    expect(screen.getByText('Borrower: Sample Borrower B')).toBeInTheDocument();
    expect(screen.getByText('Due Date: Sample Duedate B')).toBeInTheDocument();
    expect(screen.queryByText('Book: Sample Book A')).not.toBeInTheDocument();
    expect(screen.queryByText('Borrower: Sample Borrower A')).not.toBeInTheDocument();
    expect(screen.queryByText('Due Date: Sample Duedate A')).not.toBeInTheDocument();
  });

  it('conditionally_renders_badge_when_true', () => {
    render(<LoanCard book="Demo book" borrower="Demo borrower" dueDate="Demo dueDate" isOverdue={true} />);
    expect(screen.getByText('Overdue')).toBeInTheDocument();
  });

  it('conditionally_hides_badge_when_false', () => {
    render(<LoanCard book="Demo book" borrower="Demo borrower" dueDate="Demo dueDate" isOverdue={false} />);
    expect(screen.queryByText('Overdue')).not.toBeInTheDocument();
  });
});
