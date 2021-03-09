import React from 'react';
import styled from 'styled-components';

const Todo = (props) => {
    return (
        <div
            onClick={() => props.toggleTodo(props.todo.id)}
            className={`item${props.todo.completed ? ' completed' : ''}`}>
            <Tasks>&#9830;{props.todo.task}</Tasks>
        </div>
    );
}

export default Todo;

const Tasks = styled.p`
    font-family: 'IM Fell English SC', serif;
    font-size: 1.5rem;
`;