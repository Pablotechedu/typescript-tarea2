/**
 * Interfaz que define la estructura de una película
 * Cumple con tipado estricto sin uso de 'any'
 */
export interface Movie {
  id: number;
  title: string;
  genres: string[];
  rating: number;
  available: boolean;
}

/**
 * Formatea una película en un string legible
 * @param m - Objeto Movie a formatear
 * @returns String con formato "Título (Género) - Rating: X/10"
 */
export const formatMovie = (m: Movie): string => {
  const genresString = m.genres.join(', ');
  return `${m.title} (${genresString}) - Rating: ${m.rating}/10`;
};
