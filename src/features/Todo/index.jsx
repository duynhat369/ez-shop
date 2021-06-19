import React from 'react';
import TodoList from "./pages/TodoList";

TodoFeature.propTypes = {

};

function TodoFeature(props) {
  return (
    <React.Fragment>
      <TodoList />
    </React.Fragment>
  );
}

export default TodoFeature;