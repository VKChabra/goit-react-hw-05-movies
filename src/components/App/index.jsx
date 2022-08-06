import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from 'components/Loader';

const Navbar = lazy(() =>
  import('components/Navbar' /* webpackChunkName: "Navbar" */)
);
const Trending = lazy(() =>
  import('components/Trending' /* webpackChunkName: "Trending" */)
);
const MoviesList = lazy(() =>
  import('components/MoviesList' /* webpackChunkName: "MoviesList" */)
);
const Movie = lazy(() =>
  import('components/Movie' /* webpackChunkName: "Movie" */)
);
const Cast = lazy(() =>
  import('components/Movie/Cast' /* webpackChunkName: "Movie" */)
);
const Reviews = lazy(() =>
  import('components/Movie/Reviews' /* webpackChunkName: "Movie" */)
);

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/movies" element={<MoviesList />}>
            <Route path=":filmId/*" element={<Movie />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};
