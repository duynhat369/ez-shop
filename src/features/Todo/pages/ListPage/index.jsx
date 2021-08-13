import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';
import "./styles.scss";

ListTodo.propTypes = {};

function ListTodo(props) {
    const initTodoList = [
        {
            id: 1,
            name: 'Todo 1',
            status: 'new',
        },
        {
            id: 2,
            name: 'Todo 2',
            status: 'new',
        },
        {
            id: 3,
            name: 'Todo 3',
            status: 'new',
        },
        {
            id: 4,
            name: 'Todo 4',
            status: 'completed',
        },
    ];

    const history = useHistory();
    const location = useLocation();
    const match = useRouteMatch();

    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState(() => {
        const params = queryString.parse(location.search);

        return params.status || 'all';
    });

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilteredStatus(params.status || 'all');
    }, [location.search]);

    const handleShowAllClick = () => {
        const queryParams = { status: 'all', };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };

    const handleShowNewClick = () => {
        const queryParams = { status: 'new', };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };

    const handleShowCompletedClick = () => {
        const queryParams = { status: 'completed', };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };

    const renderedTodoList = useMemo(() => {
        return todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);
    }, [todoList, filteredStatus]);

    const handleTodoFormSubmit = (values) => {
        const newTodo = {
            id: todoList.length + 1,
            name: values.title,
            status: 'new',
        };

        const newTodoList = [...todoList, newTodo]
        setTodoList(newTodoList);
    }

    return (
        <div className="todoList">
            <div className="container">
                <h3>List Todo Page</h3>
                <h5>What would you like todo next ?</h5>
                <TodoForm onSubmit={handleTodoFormSubmit} />
                <TodoList todoList={renderedTodoList} />
                <div>
                    <button onClick={handleShowAllClick}>show all</button>
                    <button onClick={handleShowNewClick}>show new</button>
                    <button onClick={handleShowCompletedClick}>show completed</button>
                </div>
            </div>
        </div>
    );
}

export default ListTodo;
