import { Link, Outlet, useLocation } from 'react-router-dom';

const MoviesList = ({ films }) => {
  const location = useLocation();
  return (
    <>
      <ul className="moviesList">
        {films &&
          films.map(({ id, title }) => (
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
        <Outlet />
      </ul>
    </>
  );
};

export default MoviesList;
