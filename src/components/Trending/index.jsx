import { fetchTrendingMovies } from 'services/api';
import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList';
import styles from './trending.module.css';

const Trending = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const { results } = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h1 className={styles.title}>Trending</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default Trending;
