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
    <>
      {!movieInfoTrue && <Loader />}
      <button type="button" onClick={onBackBtn}>
        Go back
      </button>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300/${poster_path}`
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
          }
          alt={title}
        />
        <div>
          {title}({new Date(release_date).getFullYear()})
        </div>
        <div>User score: {vote_average}%</div>
        <div>Overview: {overview}</div>
        <div>
          Genres: {movieInfoTrue && genres.map(genre => genre.name).join(', ')}
        </div>
        <div className="moreInfo">
          <div>Additional information:</div>
          <Link to="cast" state={location.state}>
            Cast
          </Link>{' '}
          <Link to="reviews" state={location.state}>
            Reviews
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Movie;
