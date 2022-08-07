import { fetchFilmReviews } from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './reviews.module.css';

const Cast = () => {
  const [response, setResponse] = useState('');
  let params = useParams();
  useEffect(() => {
    async function setCast() {
      setResponse(await fetchFilmReviews(params.filmId));
    }
    setCast();
  }, [params.filmId]);

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
      {response && !results.length && (
        <div>Sorry but there are no reviews yet</div>
      )}
    </>
  );
};

export default Cast;
