import { Box } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

Clock.propTypes = {

};

function Clock(props) {
    return (
        <Box>
            <Link to="/products">Shopping now</Link>
        </Box>
    );
}

export default Clock;