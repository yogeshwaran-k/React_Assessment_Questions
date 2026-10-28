import MovieCard from '../../components/MovieCard/MovieCard';
import './MoviePage.css';

function MoviePage() {
  return (
    <main className="movie-page">
      <section className="movie-page__container">
        <header className="movie-page__header">
          <h1 className="movie-page__title">Movie Spotlight Panel</h1>
          <p className="movie-page__lead">
            This page demonstrates JSX rendering and the difference between functional and class components.
          </p>
        </header>
        <section className="movie-page__content">
          <MovieCard />
        </section>
      </section>
    </main>
  );
}

export default MoviePage;
