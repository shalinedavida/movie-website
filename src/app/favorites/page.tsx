"use client";
import React, { useState, useEffect } from "react";
import MoviesCard from "../components/MovieCards";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(favs);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Favorite Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {favorites.length === 0 ? (
          <div className="text-gray-300">No favorites yet.</div>
        ) : (
          favorites.map((movie) => (
            <MoviesCard key={movie} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}