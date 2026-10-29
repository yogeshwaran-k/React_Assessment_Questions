import { render, screen } from '@testing-library/react';
import App from '../App';
import WorkoutListPage from '../pages/WorkoutListPage/WorkoutListPage';
import ExerciseCard from '../components/ExerciseCard/ExerciseCard';

describe('Workout Routine List (Props, Reusable Components, Lists & Conditional Rendering)', () => {
  // ---------- Structure (4) ----------

  it('renders_main_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main.workout-list')).toBeInTheDocument();
  });

  it('renders_header_section', () => {
    const { container } = render(<App />);
    expect(container.querySelector('header.workout-list__header')).toBeInTheDocument();
    expect(container.querySelector('section.workout-list__content')).toBeInTheDocument();
  });

  it('renders_heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Workout Routine List' })
    ).toBeInTheDocument();
  });

  it('renders_list_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('ul.workout-list__list')).toBeInTheDocument();
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
      'Exercise: Push UpsSets: 3 x 15Duration: 8 minCompleted',
      'Exercise: SquatsSets: 4 x 12Duration: 10 min',
      'Exercise: Plank HoldSets: 3 x 1 minDuration: 5 minCompleted',
      'Exercise: Jumping JacksSets: 3 x 30Duration: 6 min'
    ]);
  });

  it('item_component_reads_given_props', () => {
    render(<ExerciseCard name="Sample Name A" sets="Sample Sets A" duration="Sample Duration A" isCompleted={true} />);
    expect(screen.getByText('Exercise: Sample Name A')).toBeInTheDocument();
    expect(screen.getByText('Sets: Sample Sets A')).toBeInTheDocument();
    expect(screen.getByText('Duration: Sample Duration A')).toBeInTheDocument();
  });

  it('item_component_updates_with_new_props', () => {
    render(<ExerciseCard name="Sample Name B" sets="Sample Sets B" duration="Sample Duration B" isCompleted={true} />);
    expect(screen.getByText('Exercise: Sample Name B')).toBeInTheDocument();
    expect(screen.getByText('Sets: Sample Sets B')).toBeInTheDocument();
    expect(screen.getByText('Duration: Sample Duration B')).toBeInTheDocument();
    expect(screen.queryByText('Exercise: Sample Name A')).not.toBeInTheDocument();
    expect(screen.queryByText('Sets: Sample Sets A')).not.toBeInTheDocument();
    expect(screen.queryByText('Duration: Sample Duration A')).not.toBeInTheDocument();
  });

  it('conditionally_renders_badge_when_true', () => {
    render(<ExerciseCard name="Demo name" sets="Demo sets" duration="Demo duration" isCompleted={true} />);
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  it('conditionally_hides_badge_when_false', () => {
    render(<ExerciseCard name="Demo name" sets="Demo sets" duration="Demo duration" isCompleted={false} />);
    expect(screen.queryByText('Completed')).not.toBeInTheDocument();
  });
});
