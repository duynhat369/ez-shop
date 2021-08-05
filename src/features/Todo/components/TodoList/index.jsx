import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList: PropTypes.array,
};

TodoList.defaultProps = {
    todoList: [],
}

function TodoList(props) {
    const { todoList } = props
    return (
        <ul>
            {todoList.map(todo => (
                <li
                    key={todo.id}
                >
                    {todo.name}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;