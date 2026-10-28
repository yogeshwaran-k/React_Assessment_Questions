import React from 'react';
import './EmployeeCard.css';

class EmployeeCard extends React.Component {
  render() {
    const name = 'Priya Sharma';
    const designation = 'Software Engineer';
    const email = 'priya.sharma@example.com';
    const department = 'Engineering';
    const isFeatured = true;

    return (
      <article className="employee-card">
        <h2 className="employee-card__heading">Employee Details</h2>
        <ul className="employee-card__details">
          <li>Name: {name}</li>
          <li>Designation: {designation}</li>
          <li>Email: {email}</li>
          <li>Department: {department}</li>
        </ul>
        {isFeatured && (
          <p className="employee-card__badge">Featured</p>
        )}
      </article>
    );
  }
}

export default EmployeeCard;
