import classNames from 'classnames';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import TodoForm from "../TodoForm";
import "./styles.scss";

TodoList.propTypes = {
};

function TodoList({ onDoneCLick }) {
  const [todos, setTodos] = useState([])

  const handleTodoFormSubmit = (formValues) => {
    if (!formValues.text || /^\s*$/.test(formValues.text)) {
      return
    }

    const newTodos = [formValues, ...todos]
    setTodos(newTodos)
  }

  const handleDoneClick = (todo, index) => {
    //clone current array to the new one
    const newTodos = [...todos]

    //toggle state
    newTodos[index] = {
      ...newTodos[index],
      status: newTodos[index].status === "new" ? "done" : "new",
    }

    //update todo list
    setTodos(newTodos)
    console.log(newTodos)
  }

  return (
    <div className="todo-list">
      <h2 className="todo-list__title">Plans for today</h2>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <ul className="todo-list__item">
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            className={classNames({
              item: true,
              done: todo.status === "done"
            })}
          >
            <p className="content">
              {todo.text}
            </p>

            <div className="icons">
              <AiOutlineEdit className="icon" />
              <AiOutlineClose className="icon" />
              <MdDone className="icon" onClick={() => handleDoneClick(todo, index)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;