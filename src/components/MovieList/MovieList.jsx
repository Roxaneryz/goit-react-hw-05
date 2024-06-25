
import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css"

const MovieList = ({movies}) => {
  const location = useLocation();

  return (
    <div className={css.movieList}>
      <ul className={css.movList}>
        {movies.map((movie) => (
          <li className={css.movListIt} key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}




export default MovieList;