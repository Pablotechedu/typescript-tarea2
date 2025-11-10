/**
 * Tipo unión discriminada para reseñas
 * Utiliza el campo 'type' como discriminador
 */
export type Review =
  | { type: 'positive'; message: string }
  | { type: 'negative'; message: string };

/**
 * Renderiza una reseña según su tipo
 * Utiliza el discriminador para determinar el formato
 * @param r - Objeto Review a renderizar
 * @returns String formateado según el tipo de reseña
 */
export const renderReview = (r: Review): string => {
  if (r.type === 'positive') {
    return `✓ Opinión positiva: ${r.message}`;
  }
  return `✗ Opinión negativa: ${r.message}`;
};
