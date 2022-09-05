import React from 'react';
import './css/TodoItem.css';

function TodoItem(props) {
  return (
    <li className='todoItem'>
      <span
        className={`icon iconCheck ${props.completed && 'iconCheck-active'}`}
        onClick={props.onComplete}
        >
        ᄼ
      </span>

      <p className={`item-p ${props.completed && 'item-p-completed'}`}>
        {props.text}
      </p>

      <span
        className='icon iconDelete'
        onClick={props.onDelete}
        >
        X
      </span>
    </li>
  );
}

export { TodoItem }