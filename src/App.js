import React from 'react';
import { AppUI } from './AppUI.js';

/*
const defaultTodos = [
  { text: "Tomar curso de intro a React", completed: true },
  { text: "Pelar cebolla", completed: false },
  { text: "Cortar cebolla", completed: false },
]
*/


function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
      } catch(error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }, 1000);
  });


  const saveItem = (newItem) => {
    try {
      setItem(newItem);
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
    } catch(error) {
      setError(error);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}



function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    })
  }

  const toggleCompleteTodo = (arg) => {
    const todoIndex = todos.findIndex(todo => todo.text === arg.text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !arg.completed;
    saveTodos(newTodos);
  }
  const deleteTodo = (text) => {
    const newTodos = todos.filter(todo => todo.text !== text);
    saveTodos(newTodos);
  }


  return (
    <AppUI
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleCompleteTodo={toggleCompleteTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;