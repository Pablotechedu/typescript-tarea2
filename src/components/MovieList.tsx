import { useFetchMovies } from '../hooks/useFetchMovies';
import { GenericList } from './GenericList';
import { AlertBox } from './AlertBox';
import { MovieCard } from './MovieCard';
import type { Movie } from '../types/Movie';

/**
 * Props para el componente MovieList
 */
interface MovieListProps {
  onSelectMovie?: (movie: Movie) => void;
}

/**
 * Componente que muestra la lista de películas obtenidas de la API
 * Maneja estados de carga, error y renderizado de datos
 */
export const MovieList = ({ onSelectMovie }: MovieListProps) => {
  const { data, loading, error } = useFetchMovies('https://api.tvmaze.com/shows');

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner" role="status" aria-label="Cargando películas"></div>
        <p>Cargando películas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <AlertBox type="error">
        <strong>Error:</strong> {error}
      </AlertBox>
    );
  }

  if (data.length === 0) {
    return (
      <AlertBox type="info">
        No se encontraron películas disponibles.
      </AlertBox>
    );
  }

  const handleSelect = (movie: Movie) => {
    if (onSelectMovie) {
      onSelectMovie(movie);
    }
  };

  return (
    <div className="movie-list">
      <GenericList
        items={data.slice(0, 10)}
        getKey={(movie) => movie.id}
        renderItem={(movie) => (
          <MovieCard movie={movie} onSelect={handleSelect} />
        )}
      />
    </div>
  );
};
