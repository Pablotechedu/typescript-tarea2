import type { Movie } from '../types/Movie';

/**
 * Props para el componente MovieCard
 * Tipado estricto de las propiedades del componente
 */
interface MovieCardProps {
  movie: Movie;
  onSelect: (movie: Movie) => void;
}

/**
 * Componente que muestra una tarjeta de película
 * Incluye título, géneros, rating y botón de selección
 * El botón se deshabilita si la película no está disponible
 */
export const MovieCard = ({ movie, onSelect }: MovieCardProps) => {
  const handleClick = () => {
    onSelect(movie);
  };

  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>
        <strong>Géneros:</strong> {movie.genres.join(', ')}
      </p>
      <p>
        <strong>Rating:</strong> {movie.rating}/10
      </p>
      <button 
        onClick={handleClick} 
        disabled={!movie.available}
        className={movie.available ? 'btn-primary' : 'btn-disabled'}
      >
        {movie.available ? 'Seleccionar' : 'No disponible'}
      </button>
    </div>
  );
};
