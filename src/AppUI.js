import React from 'react';
import { TodoCounter } from './TodoCounter.js';
import { TodoSearch } from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem.js';
import { CreateTodoButton } from './CreateTodoButton.js';


function AppUI({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  toggleCompleteTodo,
  deleteTodo
}) {
  return (
    <React.Fragment>
    <TodoCounter
      total={totalTodos}
      completed={completedTodos}
    />

    <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />

    <TodoList>
        {loading && <p>Loading your tasks</p>}
        {error && <p>There's been an error</p>}
        {(!loading && !searchedTodos.length) && <p>Create your first task</p>}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

    <CreateTodoButton />
  </React.Fragment>
  );
}

export { AppUI };