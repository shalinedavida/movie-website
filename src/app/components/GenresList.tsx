import React, { useEffect, useState } from "react";
import { fetchGenres } from "../utils/fetchMovies";
import Link from "next/link";

export interface Genre {
  id: number;
  name: string;
}

const GenresList: React.FC = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getGenres() {
      try {
        const data = await fetchGenres();
        setGenres(data);
      } catch(error){
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }
    getGenres();
  }, []);

  if (loading) return <div className="text-gray-200">Loading genres...</div>;
  if (error) return <div className="text-red-400">{error}</div>;

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {genres.map((genre) => (
        <Link
          key={genre.id}
          href={`/category?genre=${genre.id}`}
          className="bg-purple-700 text-white px-3 py-1 rounded-full text-sm font-semibold hover:bg-red-700 transition"
        >
          {genre.name}
        </Link>
      ))}
    </div>
  );
};

export default GenresList;