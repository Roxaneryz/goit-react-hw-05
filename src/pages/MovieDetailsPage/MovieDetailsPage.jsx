import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../movieApi";
import css from "./MovieDetailsPage.module.css"

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDet, setMovieDet] = useState(null);
  const navigate  = useNavigate();
  const location = useLocation();
  const locationStateRef = useRef(location.state);


  useEffect(() => {
    const getMovieDetails = async () => {
      const movie = await fetchMovieDetails(movieId);
      setMovieDet(movie);
    };
    getMovieDetails();
  }, [movieId]);
  if (!movieDet) {
    return <div>Loading....</div>
  }

  return (<div className={css.movieDet}>
    <button onClick={() => navigate(locationStateRef.current?.from ?? "/moview")}>Go back</button>
    <h1>{movieDet.title}</h1>
    <img src={`https://image.tmdb.org/t/p/w500${movieDet.poster_path}`} alt={movieDet.title} />
    <p className={css.pDetails}>{movieDet.overview}</p>
    <p className={css.pDetails}>Release Date: {movieDet.release_date}</p>
    <p className={css.pDetails}>Rating: {movieDet.vote_average}</p>
  
    <nav>
      <Link to="cast">Cast </Link>
      <Link to="reviews">Reviews</Link>
    </nav>
    <Outlet />
  </div>);

}

export default MovieDetailsPage