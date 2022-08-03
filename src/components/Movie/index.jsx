import { useEffect } from 'react';

const Movie = ({ filmId }) => {
  useEffect(() => {
    fetch(`${filmId}`);
  }, [filmId]);

  return <li className="movie"></li>;
};

export default Movie;
