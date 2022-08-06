import { fetchFilmCast } from 'services/Api.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './cast.module.css';

const Cast = () => {
  const [response, setResponse] = useState('');
  let params = useParams();
  useEffect(() => {
    async function setCast() {
      setResponse(await fetchFilmCast(params.filmId));
    }
    setCast();
  }, [params.filmId]);

  const { cast } = response;
  return (
    <>
      {response &&
        cast.map(({ id, name, profile_path }) => (
          <li key={id} className={styles.castList}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
              }
              alt={name}
            />
            {name}
          </li>
        ))}
    </>
  );
};

export default Cast;
