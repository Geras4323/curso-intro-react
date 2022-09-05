import React from 'react';
import './css/TodoCounter.css';

function TodoCounter({ total, completed }) {
  return(
    <h2 className='TodoCounter'>{completed} of {total} tasks completed</h2>
  );
}

export { TodoCounter };