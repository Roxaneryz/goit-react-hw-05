import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../movieApi";
import css from "./MovieCast.module.css"


const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const getMovieCast = async () => {
      const cast = await fetchMovieCast(movieId);
      setCast(cast);
    };
    getMovieCast();
  }, [movieId]);

  return (
    <div className={css.movieCast}>
      <h2>Cast</h2>
      <ul className={css.movieLiCast}> 
        {cast.map((member) => {
          return (
            <li className={css.movieLiItem} key={member.cast_id}>
              <span>{member.name}</span> as {member.character}
            </li>
          );
        })}
      </ul>
    </div>
  );
}



export default MovieCast;
