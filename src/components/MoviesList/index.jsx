import { Link, Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import main from 'globalStyles/main.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      {movies && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link
                to={`/movies/${id}`}
                state={{
                  from: location.pathname + location.search,
                }}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Outlet />
      {movies?.length === 0 &&
        location.search !== '?query=' &&
        location.pathname === '/movies' && (
          <div className={main.main}>Sorry, there are no results</div>
        )}
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
      overview: PropTypes.string,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
      vote_average: PropTypes.number,
    })
  ),
};

export default MoviesList;
