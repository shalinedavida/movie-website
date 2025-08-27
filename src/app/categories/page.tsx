"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { fetchGenres } from "../utils/fetchMovies";
import MoviesCard from "../components/MovieCards"
import { Movie } from "../components/MovieCards";
import {Genre} from "../components/GenresList";


const CategoryPageInner = () => {
  const searchParams = useSearchParams();
  const genreId = searchParams.get("genre");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genreName, setGenreName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const genres = await fetchGenres();
        const genre = genres.find((g:Genre) => g.id.toString() === genreId);
        setGenreName(genre?.name || "All");

        
        let response;
        if (genreId) {
          response = await fetch(`/api/movies?genre=${genreId}`);
        } else {
          response = await fetch(`/api/movies`);
        }
        const data = await response.json();
        setMovies(data);
      } catch {
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [genreId]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{genreName} Movies</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MoviesCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function CategoryPage(){
  return (
    <Suspense fallback = {<div className="text-gray-200"></div>}>
      <CategoryPageInner/>
    </Suspense>
  )
}