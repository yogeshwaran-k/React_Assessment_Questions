import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';
import './EmployeePage.css';

function EmployeePage() {
  return (
    <main className="employee-page">
      <section className="employee-page__container">
        <header className="employee-page__header">
          <h1 className="employee-page__title">Employee Information Panel</h1>
          <p className="employee-page__lead">
            This page demonstrates JSX rendering and the difference between functional and class components.
          </p>
        </header>
        <section className="employee-page__content">
          <EmployeeCard />
        </section>
      </section>
    </main>
  );
}

export default EmployeePage;
