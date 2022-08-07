import { fetchMovieReviews } from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './reviews.module.css';

const Reviews = () => {
  const [response, setResponse] = useState('');
  let params = useParams();
  useEffect(() => {
    async function setReviews() {
      setResponse(await fetchMovieReviews(params.movieId));
    }
    setReviews();
  }, [params.movieId]);

  const { results } = response;
  return (
    <>
      {response &&
        results.map(({ id, author, content }) => (
          <li key={id}>
            <div className={styles.author}>Author: {author}</div>
            {content}
          </li>
        ))}
      {response?.results?.length === 0 && (
        <div>Sorry but there are no reviews yet</div>
      )}
    </>
  );
};

export default Reviews;
