import Search from 'components/Search';
import { Link, useLocation, Outlet } from 'react-router-dom';

const MoviesList = ({ films }) => {
  const location = useLocation();
  const searchFilm = event => {
    event.preventDefault();
    console.log(event);
    // console.log(event.target.value.toLowerCase());
  };
  return (
    <>
      {location.pathname === '/movies' && <Search searchFilm={searchFilm} />}
      <ul className="moviesList">
        {films &&
          films.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        <Outlet />
      </ul>
    </>
  );
};

export default MoviesList;
