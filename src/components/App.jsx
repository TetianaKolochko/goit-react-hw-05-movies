import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout/Layout';
// import { Movies } from 'pages/Movies';
import HomePage from 'pages/Home';
// import { MovieDetails } from './MovieDetails/MovieDetails';

const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() =>
  import('../components/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
