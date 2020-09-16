import React, { useCallback } from 'react';
import { debounceFunc } from '../utils/helperFunctions';

const Search = ({
  fetchResults,
  setSearchValue,
  handleKeyDown,
}) => {
  const debounceFetchResults = useCallback(debounceFunc(fetchResults, 500), []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    debounceFetchResults(e.target.value);
  };

  return (
    <div className='search-box'>
      <form>
        <input
          type='text'
          placeholder='Search users by id, address, name etc'
          name='search'
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </form>
    </div>
  );
};

export default Search;
