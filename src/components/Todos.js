import React from 'react';
import TodoItem from './TodoItem';

const Todos = (props) => {
    let todos = props.todos.map((todo) => {
        return (
            <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={props.deleteTodo}
                updateTodo={props.updateTodo}
                updateTodoStatus={props.updateTodoStatus}
            />
        );
    });

    return (
        <ul>
            {todos}
        </ul>
    );
};

export default Todos;