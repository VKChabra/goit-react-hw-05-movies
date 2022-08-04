import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

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

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/movies/:filmId" element={<Movie />} />
          <Route path="*" element={<h1>Nothing here</h1>} />
        </Routes>
      </Suspense>
    </div>
  );
};
