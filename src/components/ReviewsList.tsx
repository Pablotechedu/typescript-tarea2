import type { Review } from '../types/Review';
import { renderReview } from '../types/Review';
import { GenericList } from './GenericList';

/**
 * Props para el componente ReviewsList
 */
interface ReviewsListProps {
  reviews: Review[];
}

/**
 * Componente que muestra la lista de reseñas
 * Utiliza GenericList para renderizar las reseñas
 */
export const ReviewsList = ({ reviews }: ReviewsListProps) => {
  if (reviews.length === 0) {
    return <p className="no-reviews">No hay reseñas aún. ¡Sé el primero en opinar!</p>;
  }

  // Agregar índice a cada review para usarlo como key
  const reviewsWithIndex = reviews.map((review, index) => ({
    ...review,
    index,
  }));

  return (
    <div className="reviews-list">
      <p className="reviews-count">Total de reseñas: {reviews.length}</p>
      <GenericList
        items={reviewsWithIndex}
        getKey={(item) => `review-${item.index}`}
        renderItem={(item) => (
          <div className={`review-item review-${item.type}`}>
            {renderReview(item)}
          </div>
        )}
      />
    </div>
  );
};
