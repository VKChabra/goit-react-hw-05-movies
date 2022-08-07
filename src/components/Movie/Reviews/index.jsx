import { fetchMovieReviews } from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  let params = useParams();
  useEffect(() => {
    (async () => {
      const { results } = await fetchMovieReviews(params.movieId);
      setReviews(results);
    })();
  }, [params.movieId]);

  return (
    <>
      {reviews && (
        <ul className={styles.reviewsList}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={styles.reviewsItem}>
              <div className={styles.author}>Author: {author}</div>
              {content}
            </li>
          ))}
        </ul>
      )}
      {reviews?.length === 0 && <div>Sorry but there are no reviews yet</div>}
    </>
  );
};

export default Reviews;
