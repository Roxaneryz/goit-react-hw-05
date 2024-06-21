
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2JiYjM3ZDdmZGRiMGU5NTJhMTk5M2ZhM2UwMDlmMiIsInN1YiI6IjY2NmRmNGJjMWFlZjFkMmIyMGUyNDZlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9pvUA5WoA3SEbLb3Mtri6Ve4y-GHHNrk4UpKDHZhfIY";

const getMovies = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export const fetchTrendingMovies = async () => {
  const response = await getMovies.get("/trending/movie/week");
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await getMovies.get("/search/movie", {
    params: { query, include_adult: false, language: "en-US", page: 1 },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await getMovies.get(`/movie/${movieId}`);
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await getMovies.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await getMovies.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};