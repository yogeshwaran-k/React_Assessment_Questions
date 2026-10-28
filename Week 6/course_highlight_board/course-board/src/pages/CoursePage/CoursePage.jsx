import CourseCard from '../../components/CourseCard/CourseCard';
import './CoursePage.css';

function CoursePage() {
  return (
    <main className="course-page">
      <section className="course-page__container">
        <header className="course-page__header">
          <h1 className="course-page__title">Course Highlight Board</h1>
          <p className="course-page__lead">
            This page demonstrates JSX rendering and the difference between functional and class components.
          </p>
        </header>
        <section className="course-page__content">
          <CourseCard />
        </section>
      </section>
    </main>
  );
}

export default CoursePage;
