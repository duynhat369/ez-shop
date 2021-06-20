import classNames from 'classnames';
import React, { useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineRollback } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import TodoForm from "../TodoForm";
import TodoFormUpdate from '../TodoFormUpdate';
import "./styles.scss";

TodoList.propTypes = {
};

function TodoList() {
  const [todos, setTodos] = useState([])

  //add todo
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
      status: "done",
    }

    //update todo list
    setTodos(newTodos)
  }

  const handleRollbackClick = (todo, index) => {
    const newTodos = [...todos]

    newTodos[index] = {
      ...newTodos[index],
      status: "new",
    }

    setTodos(newTodos)
  }

  const handleDeleteClick = (todo, index) => {
    const newTodos = [...todos]

    newTodos.splice(index, 1)

    setTodos(newTodos)
  }

  const handleUpdateClick = (todo, index) => {
    const todoNode = document.querySelector(".todo-list")
    todoNode.classList.toggle("updating")
  }

  const handleTodoFormUpdateSubmit = () => {

  }

  return (
    <div className="todo-list">
      <h2 className="todo-list__title">Plans for today</h2>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoFormUpdate onSubmitUpdate={handleTodoFormUpdateSubmit} />
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
              <AiOutlineEdit className="icon" onClick={() => handleUpdateClick(todo, index)} />
              <AiOutlineDelete className="icon" onClick={() => handleDeleteClick(todo, index)} />
              <MdDone className="icon" onClick={() => handleDoneClick(todo, index)} />
              <AiOutlineRollback className="icon" onClick={() => handleRollbackClick(todo, index)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;