
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import css from "./MovieReviews.module.css"
import { fetchMovieReviews } from "../../movieApi";


const MovieReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        
        const getMovieReviews = async () => {
            const reviews = await fetchMovieReviews(movieId);
            setReviews(reviews);
        };
        getMovieReviews();
    }, [movieId]);

    return (<div className={css.movieReview}>
        
        <h2>Reviews</h2>
        <ul className={css.listReview} >{reviews.map((review) => {
           return <li className={css.review} key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
            </li>
        })}
        </ul>
    </div>)
}


export default MovieReviews;