import { useState } from 'react';
import type { Review } from '../types/Review';

/**
 * Tipo de retorno del hook useReviews
 */
interface UseReviewsReturn {
  reviews: Review[];
  addPositiveReview: (message: string) => void;
  addNegativeReview: (message: string) => void;
  clearReviews: () => void;
}

/**
 * Hook personalizado para gestionar reseñas
 * Proporciona funciones para agregar reseñas positivas y negativas
 * @returns Objeto con reviews y funciones de gestión
 */
export const useReviews = (): UseReviewsReturn => {
  const [reviews, setReviews] = useState<Review[]>([]);

  /**
   * Agrega una reseña positiva a la lista
   * @param message - Mensaje de la reseña positiva
   */
  const addPositiveReview = (message: string): void => {
    if (!message.trim()) {
      return;
    }

    const newReview: Review = {
      type: 'positive',
      message: message.trim(),
    };

    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  /**
   * Agrega una reseña negativa a la lista
   * @param message - Mensaje de la reseña negativa
   */
  const addNegativeReview = (message: string): void => {
    if (!message.trim()) {
      return;
    }

    const newReview: Review = {
      type: 'negative',
      message: message.trim(),
    };

    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  /**
   * Limpia todas las reseñas
   */
  const clearReviews = (): void => {
    setReviews([]);
  };

  return {
    reviews,
    addPositiveReview,
    addNegativeReview,
    clearReviews,
  };
};
