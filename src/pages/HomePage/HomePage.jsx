import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../movieApi';
// import axios from 'axios';
import MovieList from '../../components/MovieList/MovieList';
import MoviesPage from '../MoviePage/MoviePage';

const HomePage =() =>{
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTopMovies = async () => {
      const movies = await fetchTrendingMovies();
      setMovies(movies);
    };
    getTopMovies();
  }, []);

  return (
    <div>
      <MoviesPage />
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;

       