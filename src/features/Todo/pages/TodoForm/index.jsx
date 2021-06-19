import PropTypes from 'prop-types';
import React, { useState } from 'react';
import "./styles.scss"

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultPros = {
  onSubmit: null,
}

function TodoForm(props) {
  const { onSubmit } = props
  const [input, setInput] = useState("")

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    //Prevent reloading browser
    e.preventDefault()

    if (!onSubmit) return

    const formValues = {
      id: Math.floor(Math.random() * 10000),
      text: input
    }

    //reset input form value
    setInput("")

    //submit
    onSubmit(formValues)
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo-input"
        className="todo-input"
        value={input}
        onChange={handleInputChange}
        placeholder="Add a new plan to list"
      />
      <button className="todo-button">ADD</button>
    </form>
  );
}

export default TodoForm;