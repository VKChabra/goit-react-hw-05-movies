const Search = ({ searchFilm }) => {
  return (
    <form className="searchFilmForm" onSubmit={searchFilm}>
      <input type="text" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
