import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../movieApi";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviePage.module.css"


const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();



   useEffect(() => {
     const queryParam = searchParams.get("query");
     if (queryParam) {
       setQuery(queryParam);
       searchMovies(queryParam).then(setMovies);
     }
   }, [searchParams]);
  
  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchParams({ query });
    const movies = await searchMovies(query);
    setMovies(movies);

  };
  return (
    <div>
      <h1>Search Movie App</h1>
      <form className={css.searchForm} onSubmit={handleSearch}>
        <input
          type="text"
          name="movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie title"
          className={css.searchInput}
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};


export default MoviesPage;