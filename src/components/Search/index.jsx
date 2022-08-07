import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchFilm } from 'services/api';
import MoviesList from 'components/MoviesList';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    async function fetchFilmOnQuery() {
      const { results } = await searchFilm(query);
      setSearchQuery(results);
    }

    fetchFilmOnQuery();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams({ query: form.elements.searchQuery.value });
    form.reset();
  };

  return (
    <form className="searchFilmForm" onSubmit={handleSubmit}>
      <label>
        <input type="text" name="searchQuery" />
      </label>
      <button type="submit">Search</button>
      {query && <MoviesList films={searchQuery} />}
    </form>
  );
};

export default Search;
