import { Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';
import React from 'react';

ProductFiltersSkeletons.propTypes = {
    length: PropTypes.number,
};

ProductFiltersSkeletons.defaultProps = {
    length: 8,
}

function ProductFiltersSkeletons({ length }) {
    return (
        <Box p={2}>
            <Skeleton width="80%" height={25} style={{ marginBottom: 16 }} />
            {Array.from(new Array(length)).map((x, index) => (
                <ul
                    key={index}
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                >
                    <li style={{ marginTop: 8 }} >
                        <Skeleton width="30%" />
                    </li>
                </ul>
            ))}
        </Box>
    );
}

export default ProductFiltersSkeletons;