import React from 'react';
import './CourseCard.css';

class CourseCard extends React.Component {
  render() {
    const course = 'React Fundamentals';
    const instructor = 'John Carter';
    const duration = '6 Weeks';
    const level = 'Beginner';
    const isFeatured = true;

    return (
      <article className="course-card">
        <h2 className="course-card__heading">Course Details</h2>
        <ul className="course-card__details">
          <li>Course: {course}</li>
          <li>Instructor: {instructor}</li>
          <li>Duration: {duration}</li>
          <li>Level: {level}</li>
        </ul>
        {isFeatured && (
          <p className="course-card__badge">Featured</p>
        )}
      </article>
    );
  }
}

export default CourseCard;
