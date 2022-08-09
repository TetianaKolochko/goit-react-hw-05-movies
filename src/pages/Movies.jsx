import { useState, useEffect } from 'react';
import { MovieFormSearch } from 'components/MovieFormSearch/MovieFormSearch';
import { MovieList } from 'components/MovieList';
import { fetchSearchMovies } from '../Services/Api';
import { useSearchParams } from 'react-router-dom';

 const Movies = () => {
  const [itemsList, setItemsList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  // console.log(query);

  useEffect(() => {
    if (query === '') {
      return;
    }
    fetchSearchMovies(query)
      .then(responce => {
        setItemsList(responce.data.results);
        if (responce.data.results.length === 0) {
          return alert(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
        }
      })
      .catch(error => console.log(error));
  }, [query]);

  const onSubmitForm = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.searchValue.value;
    if (searchValue === '') {
      return alert('Please fill in the field!');
    }

    setSearchParams(searchValue !== '' ? { query: searchValue } : {});
  };

  return (
    <main>
      <MovieFormSearch value={query} onSubmit={onSubmitForm} />
      <MovieList arrayMovies={itemsList} />
    </main>
  );
};
export default Movies;