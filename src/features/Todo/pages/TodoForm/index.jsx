import PropTypes from 'prop-types';
import React, { useState } from 'react';
import "./styles.scss";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
  count: PropTypes.number,
};

TodoForm.defaultPros = {
  onSubmit: null,
  count: 0,
}

function TodoForm(props) {
  const { onSubmit, count } = props
  const [input, setInput] = useState("")
  // const [counts, setCounts] = useState(count)

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    if (!onSubmit) return

    //Prevent reloading browser
    e.preventDefault()

    const formValues = {
      id: Math.floor(Math.random() * 10000),
      text: input,
      status: "new",
    }

    if (!formValues.text || /^\s*$/.test(formValues.text)) {
      return
    }

    //reset input form value
    setInput("")
    //submit
    onSubmit(formValues)
  }

  return (
    <React.Fragment>
      {/* {counts} */}
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo-input"
          className="todo-input"
          value={input}
          onChange={handleInputChange}
          placeholder="Add a new plan to list"
        />
        <button
          className="todo-button"
        >
          ADD
        </button>
      </form>
    </React.Fragment>
  );
}

export default TodoForm;