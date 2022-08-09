import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../Services/Api';
import { MovieList } from 'components/MovieList';

const HomePage = () => {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then(response => {
        setItemsList(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList arrayMovies={itemsList} />
    </>
  );
};
export default HomePage;
