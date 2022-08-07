import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/api';
import MoviesList from 'components/MoviesList';
import Loader from 'components/Loader';
import main from 'globalStyles/main.module.css';
import styles from './search.module.css';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    async function fetchMovieOnQuery() {
      setLoading(true);
      const { results } = await searchMovie(query);
      setSearchQuery(results);
      setLoading(false);
    }

    fetchMovieOnQuery();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams({ query: form.elements.searchQuery.value });
    form.reset();
  };

  return (
    <>
      <form className={main.main} onSubmit={handleSubmit}>
        <label className={styles.label}>
          <input type="text" name="searchQuery" />
        </label>
        <button type="submit">Search</button>
      </form>
      {loading && <Loader />}
      {query && !loading && <MoviesList movies={searchQuery} />}
    </>
  );
};

export default Search;
