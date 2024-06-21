import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../movieApi";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate  = useNavigate();
  const location = useLocation();


  useEffect(() => {
    const getMovieDetails = async () => {
      const movie = await fetchMovieDetails(movie);
      setMovie(movie);
    };
    getMovieDetails();
  }, [movieId]);
  if (!movie) {
    return <div>Loading....</div>
  }

  return (<div>
    <button onClick={() => navigate(location?.state?.from ?? "/moview")}>Go back</button>
    <h1>{movie.title}</h1>
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    <p>{movie.overview}</p>
    <p>Release Date: {movie.release_date}</p>
    <p>Rating: {movie.vote_average}</p>
  
    <nav>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
    </nav>
    <Outlet />
  </div>);

}

export default MovieDetailsPage