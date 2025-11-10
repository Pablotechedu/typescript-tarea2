import { useMemo } from 'react';
import type { Movie } from '../types/Movie';
import { formatMovie } from '../types/Movie';

/**
 * Props para el componente FavoriteMovies
 */
interface FavoriteMoviesProps {
  favorites: Movie[];
  onRemove: (movieId: number) => void;
}

/**
 * Componente que muestra las películas favoritas
 * Utiliza useMemo para calcular el promedio de rating
 */
export const FavoriteMovies = ({ favorites, onRemove }: FavoriteMoviesProps) => {
  /**
   * Calcula el promedio de rating de las películas favoritas
   * Utiliza useMemo para evitar recálculos innecesarios
   */
  const averageRating = useMemo(() => {
    if (favorites.length === 0) return 0;
    
    const totalRating = favorites.reduce((sum, movie) => sum + movie.rating, 0);
    return (totalRating / favorites.length).toFixed(2);
  }, [favorites]);

  return (
    <div className="favorite-movies">
      {favorites.length === 0 ? (
        <p className="empty-message">No hay películas favoritas aún.</p>
      ) : (
        <>
          <p className="average-rating">
            <strong>Promedio de Rating:</strong> {averageRating}/10
          </p>
          <ul className="favorites-list">
            {favorites.map((movie) => (
              <li key={movie.id} className="favorite-item">
                <span>{formatMovie(movie)}</span>
                <button
                  onClick={() => onRemove(movie.id)}
                  className="btn-remove"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
