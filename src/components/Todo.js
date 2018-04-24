import React from 'react';
import style from './Todo.css';

const Todo = props => (
    <li
        className={style.Todo}
        onClick={() => {props.action(props.task.id)}}
    >
        {props.task.text}
    </li>
);

export default Todo;
