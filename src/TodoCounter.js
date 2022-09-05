import React from 'react';
import './css/TodoCounter.css';
import { TodoContext } from './TodoContext';

function TodoCounter() {
  const {
    totalTodos: total,
    completedTodos: completed
  } = React.useContext(TodoContext);

  return(
    <h2 className='TodoCounter'>{completed} of {total} tasks completed</h2>
  );
}

export { TodoCounter };