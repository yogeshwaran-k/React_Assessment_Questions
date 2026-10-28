import { render, screen } from '@testing-library/react';
import App from '../App';
import CoursePage from '../pages/CoursePage/CoursePage';
import CourseCard from '../components/CourseCard/CourseCard';

describe('Course Highlight Board (Structure & Functionality)', () => {
  // ---------- Structure (4) ----------

  it('renders_main_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main.course-page')).toBeInTheDocument();
  });

  it('renders_header_section', () => {
    const { container } = render(<App />);
    expect(container.querySelector('header.course-page__header')).toBeInTheDocument();
    expect(container.querySelector('section.course-page__content')).toBeInTheDocument();
  });

  it('renders_heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Course Highlight Board' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Course Details' })
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
    expect(typeof CoursePage).toBe('function');
    expect(!CoursePage.prototype || !CoursePage.prototype.isReactComponent).toBe(true);
  });

  it('implements_class_card', () => {
    expect(typeof CourseCard).toBe('function');
    expect(CourseCard.prototype && CourseCard.prototype.isReactComponent).toBeTruthy();
  });

  it('card_renders_standalone_data', () => {
    render(<CourseCard />);
    expect(screen.getByText('Course: React Fundamentals')).toBeInTheDocument();
    expect(screen.getByText('Instructor: John Carter')).toBeInTheDocument();
    expect(screen.getByText('Duration: 6 Weeks')).toBeInTheDocument();
    expect(screen.getByText('Level: Beginner')).toBeInTheDocument();
  });

  it('card_shows_conditional_badge', () => {
    render(<CourseCard />);
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });

  it('renders_data_in_order', () => {
    render(<App />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(4);
    expect(items.map((item) => item.textContent)).toEqual([
      'Course: React Fundamentals',
      'Instructor: John Carter',
      'Duration: 6 Weeks',
      'Level: Beginner'
    ]);
  });

  it('no_interactive_elements', () => {
    render(<App />);
    expect(screen.queryAllByRole('button')).toHaveLength(0);
    expect(screen.queryAllByRole('textbox')).toHaveLength(0);
  });
});
