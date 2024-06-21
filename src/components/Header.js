import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm, setFilterOption } from '../store/tasksSlice';

const Header = ({ toggleTaskInput }) => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilterOption(e.target.value));
  };

  return (
    <div className="header-container">
      <div className="header">
        <button onClick={toggleTaskInput}>Add New Task</button>
      </div>
      <div className="filter-search-container">
        <div className="filter">
          <select onChange={handleFilterChange}>
            <option value="Default">Default</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search tasks..."
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
