import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditTodoForm from './EditTodoForm';

class TodoItem extends Component {

    state = {
        formStyle: {
            display: 'none',
        },
        itemStyle: {
            display: 'block',
            textDecoration: 'none'
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
            this.setState({ itemStyle: { textDecoration: 'none' } })
        } else {
            this.props.updateTodoStatus(this.props.todo, true);
            this.setState({ itemStyle: { textDecoration: 'line-through' } })
        }
    };

    deleteClickedTodo = () => {
        this.props.deleteTodo(this.props.todo);
    };

    render() {
        const { todo, updateTodo } = this.props;
        return (
            <li data-todos-index={todo._id}>
                <div className="todo">
                    <span>
                        <input type="checkbox" checked={todo.completed} onChange={this.toggleStatusForm} />
                    </span>
                    <span className="todo-item" style={this.state.itemStyle}>
                        {todo.body}
                    </span>
                    <span
                        className='remove'
                        onClick={this.deleteClickedTodo}>
                        <FontAwesomeIcon icon="trash-alt" />
                    </span>
                    <span
                        className='edit'
                        onClick={this.toggleBodyForm}>
                        <FontAwesomeIcon icon="edit" />
                    </span>
                </div>
                <EditTodoForm
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

export default TodoItem;