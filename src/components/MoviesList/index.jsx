import Search from 'components/Search';
import Movie from 'components/Movie';

const MoviesList = () => {
  const searchFilm = event => {
    event.preventDefault();
    console.log(event);
    // console.log(event.target.value.toLowerCase());
  };
  return (
    <div>
      <Search searchFilm={searchFilm} />
      <ul className="moviesList">
        <Movie />
      </ul>
    </div>
  );
};

export default MoviesList;
