import React from "react";
import Image from "next/image";

export interface Movie {
  id: number;
  title: string;
  poster_path?: string | null;
  releaseDate?: string | null ;
}

interface MoviesCardProps {
  movie: Movie;
}

const MoviesCard: React.FC<MoviesCardProps> = ({ movie }) => (
  <div className="bg-black bg-opacity-80 rounded-lg p-4 shadow-md">
    <Image
      src={
        movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : "/placeholder.jpg"
      } 
      alt={movie.title}
      width={500} 
      height={320} 
      className="rounded mb-2 object-cover w-full h-64"
    />
    <h2 className="text-lg font-bold text-gray-200">{movie.title}</h2>
    <p className="text-gray-400">{movie.releaseDate || "No release date"}</p>
  </div>
);

export default MoviesCard;