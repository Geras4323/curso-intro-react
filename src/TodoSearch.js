import React from 'react';
import './css/TodoSearch.css';
import { TodoContext } from './TodoContext';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className='search'>
      <input
        className='searchBox'
        placeholder="Search for a task"
        value={searchValue}
        onChange={onSearchValueChange}
      />

      <span className='searchIcon'></span>
    </div>
  );
}

export { TodoSearch }