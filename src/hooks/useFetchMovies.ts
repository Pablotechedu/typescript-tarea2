import { useState, useEffect } from 'react';
import type { Movie } from '../types/Movie';

/**
 * Tipo de retorno del hook useFetchMovies
 */
interface UseFetchMoviesReturn {
  data: Movie[];
  loading: boolean;
  error: string | null;
}

/**
 * Interfaz para los datos de la API de TVMaze
 */
interface TVMazeShow {
  id: number;
  name: string;
  genres: string[];
  rating: {
    average: number | null;
  };
  status: string;
}

/**
 * Hook personalizado para obtener películas desde una API
 * Maneja estados de carga, error y datos
 * @param url - URL de la API a consultar
 * @returns Objeto con data, loading y error
 */
export const useFetchMovies = (url: string): UseFetchMoviesReturn => {
  const [data, setData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url, {
          signal: abortController.signal,
        });
        
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const shows: TVMazeShow[] = await response.json();

        // Transformar los datos de la API al formato Movie
        const movies: Movie[] = shows.map((show) => ({
          id: show.id,
          title: show.name,
          genres: show.genres.length > 0 ? show.genres : ['Sin género'],
          rating: show.rating.average ?? 0,
          available: show.status === 'Running' || show.status === 'Ended',
        }));

        setData(movies);
      } catch (err) {
        // No mostrar error si fue cancelado por cleanup
        if (err instanceof Error && err.name === 'AbortError') {
          return;
        }
        
        const errorMessage = err instanceof Error 
          ? err.message 
          : 'Error desconocido al cargar las películas';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup: cancelar fetch si el componente se desmonta
    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, loading, error };
};
