import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../movieApi";


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

  return (<div>
    <h2>Cast</h2>
    <ul>
      {cast.map((member) => {
       return <li key={member.cast_id}>
        {member.name} as {member.character}
      </li>})}
    </ul>
  </div>)
}



export default MovieCast;
