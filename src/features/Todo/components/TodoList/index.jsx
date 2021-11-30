import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from '@material-ui/core';

TodoList.propTypes = {
    todoList: PropTypes.array,
};

TodoList.defaultProps = {
    todoList: [],
}

function TodoList(props) {
    const { todoList } = props
    return (
        <List>
            {todoList.map(todo => (
                <ListItem
                    key={todo.id}
                >
                    {todo.name}
                </ListItem>
            ))}
        </List>
    );
}

export default TodoList;