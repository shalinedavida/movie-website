const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_MOVIEDB_API_KEY || process.env.MOVIEDB_API_KEY;

export async function fetchLatestMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch latest movies");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching latest movies:", error);
    return [];
  }
}

export async function searchMovies(query: string) {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    if (!response.ok) {
      throw new Error("Failed to search movies");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
}

export async function fetchGenres() {
  try {
    const response = await fetch(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch genres");
    }
    const data = await response.json();
    return data.genres;
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
}