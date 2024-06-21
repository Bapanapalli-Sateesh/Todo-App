import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../store/tasksSlice';

const Search = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
