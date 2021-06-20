import PropTypes from 'prop-types';
import React, { useState } from 'react';
import "./styles.scss"


TodoFormUpdate.propTypes = {
  onSubmitUpdate: PropTypes.func,
};

TodoFormUpdate.defaultPros = {
  onSubmitUpdate: null,
}

function TodoFormUpdate(props) {
  const { onSubmitUpdate } = props
  const [input, setInput] = useState("")

  const handleInputChangeUpdate = (e) => {
    setInput(e.target.value)
  }

  const handleSubmitUpdate = (e) => {
    const todoNode = document.querySelector(".todo-list")
    todoNode.classList.toggle("updating")

    e.preventDefault()

    if (!onSubmitUpdate) return

    setInput("")
  }

  return (
    <React.Fragment>
      <form className="todo-form-update" onSubmit={handleSubmitUpdate}>
        <input
          type="text"
          name="todo-input-update"
          className="todo-input-update"
          value={input}
          onChange={handleInputChangeUpdate}
        />
        <button className="todo-button-update">UPDATE</button>
      </form>
    </React.Fragment>
  );
}

export default TodoFormUpdate;