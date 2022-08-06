import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchFilm } from 'services/Api.js';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    // !!!if (query) return;

    async function fetchFilmOnQuery() {
      const response = await searchFilm(query);
      console.log(response);
      setSearchQuery(response);
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
      {searchQuery && <div>Got me</div>}
    </form>
  );
};

export default Search;
