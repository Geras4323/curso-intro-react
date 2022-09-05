import React from 'react';
import './css/CreateTodoButton.css';

function CreateTodoButton(props) {
  const onButtonClick = (msg) => {
    alert(msg)
  };

  return (
    <button
      className='addTaskButton'
      onClick={() => onButtonClick('Create Task Button was clicked')}
    >
        +
    </button>
  );
}

export { CreateTodoButton }