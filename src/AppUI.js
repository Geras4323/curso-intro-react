import React from 'react';
import './css/AppUI.css';
import { TodoContext } from './TodoContext/index.js';
import { TodoCounter } from './TodoCounter.js';
import { TodoSearch } from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem.js';
import { CreateTodoButton } from './CreateTodoButton.js';
import { TodoForm } from './TodoForm/TodoForm.js';
import { Modal } from './Modal/modal.js';


function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    isModalOpen,
    setIsModalOpen,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
    <TodoCounter />
    <TodoSearch />

    <TodoList>
      {loading && <p className='message'>Loading your tasks</p>}
      {error && <p className='message'>There's been an error</p>}
      {(!loading && !searchedTodos.length) && <p className='message'>Add your tasks with the button below!</p>}

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

    {isModalOpen && (
      <Modal>
        <TodoForm />
      </Modal>
    )}

    <CreateTodoButton
      setIsModalOpen={setIsModalOpen}
    />
  </React.Fragment>
  );
}

export { AppUI };