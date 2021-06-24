import PropTypes from 'prop-types';
import React, { useState } from 'react';

TodoCounter.propTypes = {
  count: PropTypes.number,
};

TodoCounter.defaultPros = {
  count: 0,
}

function TodoCounter(props) {
  const { count } = props
  return (
    <React.Fragment>
      {count}
    </React.Fragment>
  );
}

export default TodoCounter;