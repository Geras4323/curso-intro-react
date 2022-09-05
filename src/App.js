import React from 'react';
import { AppUI } from './AppUI.js';
import { TodoProvider } from './TodoContext/index.js'

/*
const defaultTodos = [
  { text: "Tomar curso de intro a React", completed: true },
  { text: "Pelar cebolla", completed: false },
  { text: "Cortar cebolla", completed: false },
]
*/


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;