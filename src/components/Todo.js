import React, { Component } from 'react';
import TodoForm from './TodoForm';

class Todo extends Component {

    state = {
        formStyle: {
            display: 'none',
        },
        itemStyle: {
            display: 'block',
        },
    };

    toggleBodyForm = () => {
        if (this.state.formStyle.display === 'block') {
            this.setState({ formStyle: { display: 'none' } })
            this.setState({ itemStyle: { display: 'block' } })
        } else {
            this.setState({ formStyle: { display: 'block' } });
            this.setState({ itemStyle: { display: 'none' } })
        }
    };

    toggleStatusForm = () => {
        if (this.props.todo.completed) {
            this.props.updateTodoStatus(this.props.todo, false);
        } else {
            this.props.updateTodoStatus(this.props.todo, true);
        }
    };

    deleteClickedTodo = () => {
        this.props.deleteTodo(this.props.todo);
    };

    render() {
        const { todo, updateTodo } = this.props;
        return (
            <li data-todos-index={todo._id}>
                <div>
                    <span>
                        <input type="checkbox" checked={todo.completed} onChange={this.toggleStatusForm} />
                    </span>
                    <span className="todo-item" style={this.state.itemStyle}>
                        {todo.body}
                    </span>
                    <span
                        className='edit'
                        onClick={this.toggleBodyForm}>
                        Edit
                    </span>
                    <span
                        className='remove'
                        onClick={this.deleteClickedTodo}>
                        Delete
                    </span>
                </div>
                <TodoForm
                    todo={todo}
                    style={this.state.formStyle}
                    autoFocus={true}
                    buttonName="Update Todo!"
                    updateTodo={updateTodo}
                    toggleBodyForm={this.toggleBodyForm} />
            </li>
        );
    };
};

export default Todo;