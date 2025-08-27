"use client";
import React, { useState } from "react";
import { useFetchMovies } from "../app/hooks/useFetchMovies";
import MoviesCard from "../app/components/MovieCards";
import SearchBar from "../app/components/SearchBar";
import GenresList from "../app/components/GenresList";
import NavBar from "../app/components/NavBar";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { movies, loading, error } = useFetchMovies(searchTerm);

  const sortedMovies = movies.sort(
  (a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
);


  return (
    <main>
      <NavBar />
      <div className="relative z-10 p-8 min-h-screen">
        <SearchBar onSearch={setSearchTerm} />
        <GenresList />
        <section>
          <h2 className="text-2xl font-bold mb-4">Latest Movies</h2>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {sortedMovies.map((movie) => (
                <MoviesCard key={movie.id} movie={movie} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}