import React, { useState } from 'react';
import TodoForm from "../TodoForm";
import "./styles.scss"

TodoList.propTypes = {

};

function TodoList() {
  const [todos, setTodos] = useState([])

  const handleTodoFormSubmit = (formValues) => {
    if (!formValues.text || /^\s*$/.test(formValues.text)) {
      return
    }

    const newTodos = [formValues, ...todos]

    setTodos(newTodos)

    console.log(...todos)
  }

  return (
    <div className="todo-list">
      <h2 className="todo-list__title">Plans for today</h2>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <ul className="todo-list__item">
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;