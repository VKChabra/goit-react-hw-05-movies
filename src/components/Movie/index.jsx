import { useEffect, useState } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { fetchFilmDetails } from 'services/Api.js';
import Loader from 'components/Loader';

const Movie = () => {
  let params = useParams();
  const [response, setResponse] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  useEffect(() => {
    async function setDetails() {
      setResponse(await fetchFilmDetails(params.filmId));
    }
    setDetails();
  }, [params.filmId]);

  const { title, genres, overview, poster_path, release_date, vote_average } =
    response;
  const responseTrue = response !== '';
  return (
    <>
      {!responseTrue && <Loader />}
      <button type="button" onClick={onGoBack}>
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
          {title}({release_date})
        </div>
        <div>User score: {vote_average}%</div>
        <div>Overview: {overview}</div>
        <div>
          Genres: {responseTrue && genres.map(genre => genre.name).join(', ')}
        </div>
        <div className="moreInfo">
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
