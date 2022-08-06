import { fetchTrendingMovies } from 'services/Api.js';
import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList';

const Trending = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const { results } = await fetchTrendingMovies();
        setFilms(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return <MoviesList films={films} />;
};

export default Trending;
