import { NextResponse } from "next/server";

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.MOVIEDB_API_KEY;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const genre = searchParams.get("genre");

  let url = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`;
  if (query) {
    url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
  }
  if (genre) {
    url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch movies");
    const data = await response.json();
    return NextResponse.json(data.results);
  } catch(error){
return new Response((error as Error).message, {
    status: 500
})
}
}
