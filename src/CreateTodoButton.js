import React from 'react';
import './css/CreateTodoButton.css';

function CreateTodoButton(props) {
  const onButtonClick = () => {
    props.setIsModalOpen(!props.isModalOpen)
  };

  return (
    <button
      className='addTaskButton'
      onClick={onButtonClick}
    >
        +
    </button>
  );
}

export { CreateTodoButton }