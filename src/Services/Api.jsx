import axios from 'axios';

const API_KEY = `5d3a6642eae8cdda8ef345e39aa47a19`;

export const fetchTrendingMovies = () => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1`
  );
};

export const fetchSearchMovies = value => {
  return axios.get(`
https://api.themoviedb.org/3/search/movie?query=${value}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`);
};

export const fetchSearchMoviesID = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
};

export const fetchMovieCast = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
};

export const fetchMovieReviews = id => {
  return axios.get(`
https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
};
