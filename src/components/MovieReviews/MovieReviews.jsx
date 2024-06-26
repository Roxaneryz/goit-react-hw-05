
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import css from "./MovieReviews.module.css"
import { fetchMovieReviews } from "../../movieApi";


const MovieReviews = () => {
    
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        const getMovieReviews = async () => {
          
            try {
                const reviews = await fetchMovieReviews(movieId);
                setReviews(reviews);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
            }
        };
        getMovieReviews();
    }, [movieId]);

    if (isLoading) {
        return <div> Loading reviews...</div>;
    }
    if (reviews.length === 0) {
        return <div>No reviews available for this movie.</div>;
    }

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