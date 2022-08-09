import { fetchSearchMoviesID } from 'Services/Api';
import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import {
  Poster,
  Container,
  PosterContainer,
  GenreContainer,
  InfoContainer,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchSearchMoviesID(movieId)
      .then(responce => {
        setMovies(responce.data);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;

  const date = release_date.slice(0, 4);
  const backLink = location.state?.from ?? '/';

  return (
    <main>
      <Link to={backLink}>Go back</Link>
      <Container>
        <PosterContainer>
          <Poster
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt="Poster"
          />
        </PosterContainer>
        <div>
          <h2>
            {original_title} ({date})
          </h2>
          <p>User score: {vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <GenreContainer>
            {genres.map(item => (
              <p key={item.id}>{item.name}</p>
            ))}
          </GenreContainer>
        </div>
      </Container>

      <InfoContainer location={backLink}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLink }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLink }}>
              Reviews
            </Link>
          </li>
        </ul>
      </InfoContainer>
      <Suspense fallback={<div>Please wait</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default MovieDetails;
