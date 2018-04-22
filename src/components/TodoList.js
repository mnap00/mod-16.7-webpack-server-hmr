import React from 'react';
import style from './TodoList.css';

const TodoList = props => (
    <ul className={style.TodoList}>
        {
            props.list.map(item => (
                <li
                    key={item.id}
                    className={style.Todo}
                    onClick={() => {props.remove(item.id)}}
                >
                    {item.text}
                </li>
            ))
        }
    </ul>
);

export default TodoList;
