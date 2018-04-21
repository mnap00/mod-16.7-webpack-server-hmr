import React from 'react';
import style from './Title.css';

const Title = props => (
    <div className={style.AppTitle}>
        <h1>{props.title}</h1>
        <h3>{props.tasks} tasks to do</h3>
    </div>
);

export default Title;
