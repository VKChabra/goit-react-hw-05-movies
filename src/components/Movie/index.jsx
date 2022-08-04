import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmDetails } from 'services/Api.js';

const Movie = () => {
  let params = useParams();
  console.log(params.filmId);
  useEffect(() => {
    fetchFilmDetails(params.filmId);
    <li>{params.filmId}</li>;
  }, [params.filmId]);
};

export default Movie;
