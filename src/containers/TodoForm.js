import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const {value} = this.state;
        if (value != '') {
            this.props.submit(value);
        }
    }
    render() {
        const formCaption = 'Add task:';
        return (
            <form
                className={style.TodoForm}
                onSubmit={this.handleSubmit}
            >
                <label
                    className={style.TodoForm__label}
                    htmlFor='taskText'
                >
                    {formCaption}
                </label>
                <input
                    className={style.TodoForm__input}
                    type='text'
                    id='taskText'
                    onChange={this.handleChange}
                    value={this.state.value}
                />
            </form>
        );
    }
}

export default TodoForm;
