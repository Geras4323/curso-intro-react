import React from 'react';
import { TodoContext } from './TodoContext/index.js';
import { TodoCounter } from './TodoCounter.js';
import { TodoSearch } from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem.js';
import { CreateTodoButton } from './CreateTodoButton.js';


function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
    <TodoCounter />

    <TodoSearch />

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