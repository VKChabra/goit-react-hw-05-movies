import { fetchMovieCast } from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState('');
  let params = useParams();
  useEffect(() => {
    (async () => {
      const { cast } = await fetchMovieCast(params.movieId);
      setCast(cast);
    })();
  }, [params.movieId]);

  return (
    <>
      {cast && (
        <ul className={styles.castList}>
          {cast.map(({ id, name, profile_path, character }) => (
            <li key={id} className={styles.castItem}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
                }
                alt={name}
                width="100px"
                height="150px"
              />
              <div className={styles.name}>{name}</div>
              <div className={styles.character}>Character: {character}</div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
