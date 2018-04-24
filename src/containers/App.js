import React from 'react';
import uuid from 'uuid';
import {hot} from 'react-hot-loader';

import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../containers/TodoForm';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, text: 'clean room'},
                {id: 2, text: 'wash the dishes'},
                {id: 3, text: 'feed my cat'}
            ]
        };
    }
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4()
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        const appTitle = 'Todo App';
        return (
            <div className={style.TodoApp}>
                <Title
                    title={appTitle}
                    tasks={this.state.data.length}
                />
                <TodoForm
                    submit={val => {this.addTodo(val)}}
                />
                <TodoList
                    list={this.state.data}
                    remove={id => {this.removeTodo(id)}}
                />
            </div>
        );
    }
}

export default hot(module) (App);
