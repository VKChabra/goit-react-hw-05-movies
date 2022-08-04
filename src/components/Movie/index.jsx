import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmDetails } from 'services/Api.js';
import Loader from 'components/Loader';

const Movie = () => {
  let params = useParams();
  const [response, setResponse] = useState('');
  useEffect(() => {
    async function setDetails() {
      setResponse(await fetchFilmDetails(params.filmId));
    }
    setDetails();
  }, [params.filmId]);

  const { title, genres, overview, poster_path, release_date, vote_average } =
    response;
  return (
    <>
      {response === '' && <Loader />}
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
        Genres: {response !== '' && genres.map(genre => genre.name).join(', ')}
      </div>
    </>
  );
};

export default Movie;
