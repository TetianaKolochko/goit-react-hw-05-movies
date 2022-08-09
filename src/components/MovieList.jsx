import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieList = ({ arrayMovies }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {arrayMovies.map(({ id, title, name }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }} key={id}>
                {title ? title : name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

MovieList.propTypes = {
  arrayMovies: PropTypes.arrayOf(PropTypes.object),
};
