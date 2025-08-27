import { useState, useEffect } from "react";
import { fetchLatestMovies, searchMovies } from "../utils/fetchMovies";
import {Movie} from "../components/MovieCards";

export function useFetchMovies(query?: string) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    setError("");
    const fetchData = async () => {
      try {
        const rawData = query
          ? await searchMovies(query)
          : await fetchLatestMovies();
        const sanitizedData : Movie[]= (rawData || []).map((movie):Movie => {
          const releaseDate = new Date(movie.releaseDate);
          return {
            ...movie,
            releaseDate: isNaN(releaseDate.getTime())
              ? null
              : releaseDate.toISOString(),
          };
        });
        setMovies(sanitizedData);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);
  return { movies, loading, error };
}











