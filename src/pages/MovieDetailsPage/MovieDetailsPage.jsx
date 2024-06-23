import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../movieApi";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDet, setMovieDet] = useState(null);
  const navigate  = useNavigate();
  const location = useLocation();


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

  return (<div>
    <button onClick={() => navigate(location?.state?.from ?? "/moview")}>Go back</button>
    <h1>{movieDet.title}</h1>
    <img src={`https://image.tmdb.org/t/p/w500${movieDet.poster_path}`} alt={movieDet.title} />
    <p>{movieDet.overview}</p>
    <p>Release Date: {movieDet.release_date}</p>
    <p>Rating: {movieDet.vote_average}</p>
  
    <nav>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
    </nav>
    <Outlet />
  </div>);

}

export default MovieDetailsPage