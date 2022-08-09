import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';

import {
  SearchbarHeader,
  SearchForm,
  SearchBtn,
  SearchFormSpan,
  SearchFormInput,
} from './MovieFormSearch.styled';

export const MovieFormSearch = ({ value, onSubmit }) => {
  const [searchValue, setSearchValue] = useState(value);

  return (
    <SearchbarHeader>
      <SearchForm onSubmit={onSubmit}>
        <SearchBtn type="submit">
          <FcSearch />
          <SearchFormSpan></SearchFormSpan>
        </SearchBtn>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie name"
          name="searchValue"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
      </SearchForm>
    </SearchbarHeader>
  );
};
MovieFormSearch.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
