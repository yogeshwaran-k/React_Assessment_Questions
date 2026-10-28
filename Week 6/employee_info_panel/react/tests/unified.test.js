import { render, screen } from '@testing-library/react';
import App from '../App';
import EmployeePage from '../pages/EmployeePage/EmployeePage';
import EmployeeCard from '../components/EmployeeCard/EmployeeCard';

describe('Employee Information Panel (Structure & Functionality)', () => {
  // ---------- Structure (4) ----------

  it('renders_main_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main.employee-page')).toBeInTheDocument();
  });

  it('renders_header_section', () => {
    const { container } = render(<App />);
    expect(container.querySelector('header.employee-page__header')).toBeInTheDocument();
    expect(container.querySelector('section.employee-page__content')).toBeInTheDocument();
  });

  it('renders_heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Employee Information Panel' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Employee Details' })
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
    expect(typeof EmployeePage).toBe('function');
    expect(!EmployeePage.prototype || !EmployeePage.prototype.isReactComponent).toBe(true);
  });

  it('implements_class_card', () => {
    expect(typeof EmployeeCard).toBe('function');
    expect(EmployeeCard.prototype && EmployeeCard.prototype.isReactComponent).toBeTruthy();
  });

  it('card_renders_standalone_data', () => {
    render(<EmployeeCard />);
    expect(screen.getByText('Name: Priya Sharma')).toBeInTheDocument();
    expect(screen.getByText('Designation: Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Email: priya.sharma@example.com')).toBeInTheDocument();
    expect(screen.getByText('Department: Engineering')).toBeInTheDocument();
  });

  it('card_shows_conditional_badge', () => {
    render(<EmployeeCard />);
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });

  it('renders_data_in_order', () => {
    render(<App />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(4);
    expect(items.map((item) => item.textContent)).toEqual([
      'Name: Priya Sharma',
      'Designation: Software Engineer',
      'Email: priya.sharma@example.com',
      'Department: Engineering'
    ]);
  });

  it('no_interactive_elements', () => {
    render(<App />);
    expect(screen.queryAllByRole('button')).toHaveLength(0);
    expect(screen.queryAllByRole('textbox')).toHaveLength(0);
  });
});
