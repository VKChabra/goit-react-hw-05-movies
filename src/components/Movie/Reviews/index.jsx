import { fetchMovieReviews } from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  let params = useParams();
  useEffect(() => {
    async function fetchReviews() {
      setReviews(await fetchMovieReviews(params.movieId));
    }
    fetchReviews();
  }, [params.movieId]);

  const { results } = reviews;
  return (
    <>
      {reviews && (
        <ul className={styles.reviewsList}>
          {results.map(({ id, author, content }) => (
            <li key={id} className={styles.reviewsItem}>
              <div className={styles.author}>Author: {author}</div>
              {content}
            </li>
          ))}
        </ul>
      )}
      {reviews?.results?.length === 0 && (
        <div>Sorry but there are no reviews yet</div>
      )}
    </>
  );
};

export default Reviews;
