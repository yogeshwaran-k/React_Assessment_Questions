import ExerciseCard from '../../components/ExerciseCard/ExerciseCard';
import './WorkoutListPage.css';

const items = [
  { id: 1, name: 'Push Ups', sets: '3 x 15', duration: '8 min', isCompleted: true },
  { id: 2, name: 'Squats', sets: '4 x 12', duration: '10 min', isCompleted: false },
  { id: 3, name: 'Plank Hold', sets: '3 x 1 min', duration: '5 min', isCompleted: true },
  { id: 4, name: 'Jumping Jacks', sets: '3 x 30', duration: '6 min', isCompleted: false }
];

function WorkoutListPage() {
  return (
    <main className="workout-list">
      <section className="workout-list__container">
        <header className="workout-list__header">
          <h1 className="workout-list__title">Workout Routine List</h1>
          <p className="workout-list__lead">
            This page demonstrates passing props, reusable components, rendering lists with keys, and conditional rendering.
          </p>
        </header>
        <section className="workout-list__content">
          <ul className="workout-list__list">
            {items.map((item) => (
              <ExerciseCard key={item.id} name={item.name} sets={item.sets} duration={item.duration} isCompleted={item.isCompleted} />
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}

export default WorkoutListPage;
