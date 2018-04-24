import React from 'react';
import style from './TodoList.css';

import Todo from '../components/Todo.js';

const TodoList = props => (
    <ul className={style.TodoList}>
        {
            props.list.map(item => (
                <Todo
                    key={item.id}
                    task={item}
                    action={props.remove}
                />
            ))
        }
    </ul>
);

export default TodoList;
