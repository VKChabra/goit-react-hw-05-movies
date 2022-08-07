import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/api';
import MoviesList from 'components/MoviesList';
import Loader from 'components/Loader';

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
      <form className="searchMovieForm" onSubmit={handleSubmit}>
        <label>
          <input type="text" name="searchQuery" />
        </label>
        <button type="submit">Search</button>
        {query && !loading && <MoviesList movies={searchQuery} />}
      </form>
      {loading && <Loader />}
    </>
  );
};

export default Search;
