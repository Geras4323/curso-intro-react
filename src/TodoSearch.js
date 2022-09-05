import React from 'react';
import './css/TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className='search'>
      <input
        className='searchBox'
        placeholder="Cebolla"
        value={searchValue}
        onChange={onSearchValueChange}
      />

      <span className='searchIcon'></span>
    </div>
  );
}

export { TodoSearch }