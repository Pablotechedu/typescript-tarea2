import { useState } from 'react';
import { Section } from './Section';
import { MovieList } from './MovieList';
import { FavoriteMovies } from './FavoriteMovies';
import { ReviewInput } from './ReviewInput';
import { ReviewsList } from './ReviewsList';
import { useReviews } from '../hooks/useReviews';
import type { Movie } from '../types/Movie';

/**
 * Componente principal que integra toda la aplicación
 * Demuestra composición, reutilización y tipado consistente
 */
export const MovieDashboard = () => {
  const { reviews, addPositiveReview, addNegativeReview, clearReviews } = useReviews();
  const [reviewInput, setReviewInput] = useState<string>('');
  const [favorites, setFavorites] = useState<Movie[]>([]);

  /**
   * Maneja la adición de una reseña (positiva o negativa)
   */
  const handleAddReview = (type: 'positive' | 'negative') => {
    if (!reviewInput.trim()) return;

    if (type === 'positive') {
      addPositiveReview(reviewInput);
    } else {
      addNegativeReview(reviewInput);
    }
    setReviewInput('');
  };

  /**
   * Agrega una película a favoritos
   */
  const handleAddFavorite = (movie: Movie) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.id === movie.id);
      if (exists) return prev;
      return [...prev, movie];
    });
  };

  /**
   * Elimina una película de favoritos
   */
  const handleRemoveFavorite = (movieId: number) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== movieId));
  };

  return (
    <div className="movie-dashboard">
      <header className="dashboard-header">
        <h1>🎬 Movie Manager</h1>
        <p>Gestión de películas y reseñas con React + TypeScript</p>
      </header>

      <div className="dashboard-content">
        {/* Sección de lista de películas */}
        <Section title="Catálogo de Películas">
          <MovieList onSelectMovie={handleAddFavorite} />
        </Section>

        {/* Sección de películas favoritas */}
        <Section title="Mis Favoritas">
          <FavoriteMovies favorites={favorites} onRemove={handleRemoveFavorite} />
        </Section>

        {/* Sección de reseñas */}
        <Section title="Reseñas de Usuarios">
          <div className="reviews-section">
            <ReviewInput
              value={reviewInput}
              onChange={setReviewInput}
              onAddPositive={() => handleAddReview('positive')}
              onAddNegative={() => handleAddReview('negative')}
              onClear={clearReviews}
              showClearButton={reviews.length > 0}
            />
            <ReviewsList reviews={reviews} />
          </div>
        </Section>
      </div>

      <footer className="dashboard-footer">
        <p>Universidad Galileo - React Avanzado - Tarea #2</p>
      </footer>
    </div>
  );
};
