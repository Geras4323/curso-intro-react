import React from 'react';
import { TodoContext } from '../TodoContext/index.js'
import '../css/Form.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const {
    addTodo,
    setIsModalOpen
  } = React.useContext(TodoContext);


  function onChange(event) {
    setNewTodoValue(event.target.value);
  }
  function onCancel() {
    setIsModalOpen(false);
  }
  function onSubmit(event) {
    event.preventDefault();
    addTodo(newTodoValue);
    setIsModalOpen(false);
  }


  return (
    <form
      onSubmit={onSubmit}
      className="Form"
    >
      <label
        className="form_label"
      >Add your new task</label>
      <textarea
        className='form_textarea'
        value={newTodoValue}
        onChange={onChange}
        placeholder='Cut onion for dinner'
      />
      <div className="form_buttonDiv">

        <button
          className='button button-cancel'
          type='button'
          onClick={onCancel}
        >
          Cancel
        </button>

        <button
          className='button button-submit'
          type='submit'
        >
          Add
        </button>

      </div>
    </form>
  );
}

export { TodoForm };