import { useEffect, useState } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import Loader from 'components/Loader';
import main from 'globalStyles/main.module.css';
import styles from './movie.module.css';

const Movie = () => {
  let params = useParams();
  const [movieInfo, setMovieInfo] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function setDetails() {
      setMovieInfo(await fetchMovieDetails(params.movieId));
    }
    setDetails();
  }, [params.movieId]);

  const onBackBtn = () => {
    navigate(location?.state?.from ?? '/');
  };

  const { title, genres, overview, poster_path, release_date, vote_average } =
    movieInfo;
  const movieInfoTrue = movieInfo !== '';

  return (
    <div className={main.main}>
      {!movieInfoTrue && <Loader />}
      <button type="button" onClick={onBackBtn} className={styles.backBtn}>
        Go back
      </button>
      <div className={styles.info}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300/${poster_path}`
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
          }
          alt={title}
        />
        <div className={styles.textInfo}>
          <h1 className={styles.title}>
            {title}({new Date(release_date).getFullYear()})
          </h1>
          <div className={styles.wrapper}>
            User score: {Math.floor(vote_average * 10)}%
          </div>
          <div className={styles.wrapper}>
            <h2>Overview:</h2>
            <div className={styles.wrapper}>{overview}</div>
          </div>
          <div className={styles.wrapper}>
            <h2>Genres:</h2>
            <div className={styles.wrapper}>
              {movieInfoTrue && genres.map(genre => genre.name).join(', ')}
            </div>
          </div>
        </div>
      </div>
      <div className="moreInfo">
        <div className={styles.wrapper}>Additional information:</div>
        <Link to="cast" state={location.state}>
          Cast
        </Link>{' '}
        <Link to="reviews" state={location.state}>
          Reviews
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Movie;
