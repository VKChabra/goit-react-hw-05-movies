import Search from 'components/Search';
// import Movie from 'components/Movie';
import { Link, useLocation } from 'react-router-dom';
// import { fetchFilmDetails } from 'services/Api.js';

const MoviesList = ({ films }) => {
  const location = useLocation();
  const searchFilm = event => {
    event.preventDefault();
    console.log(event);
    // console.log(event.target.value.toLowerCase());
  };
  return (
    <div>
      {location.pathname === '/movies' && <Search searchFilm={searchFilm} />}
      <ul className="moviesList">
        {films &&
          films.map(({ id, title }) => (
            <Link key={id} to={`/movies/${id}`}>
              {title}
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default MoviesList;
