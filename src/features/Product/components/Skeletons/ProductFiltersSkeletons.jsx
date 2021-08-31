import { Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';
import React from 'react';

ProductFiltersCategoriesSkeletons.propTypes = {
    length: PropTypes.number,
};

ProductFiltersCategoriesSkeletons.defaultProps = {
    length: 8,
}

function ProductFiltersCategoriesSkeletons({ length }) {
    return (
        <Box p={2}>
            {/* Filter by categories */}
            <Skeleton width="80%" height={25} style={{ marginBottom: 16 }} />
            {Array.from(new Array(length)).map((x, index) => (
                <ul
                    style={{ marginBottom: 8 }}
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

            {/* Filter by price */}
            <Skeleton width="80%" height={25} style={{ marginBottom: 16, marginTop: 16 }} />
            <Skeleton width="30%" height={20} style={{ display: 'inline-block', marginRight: 8 }} />
            <Skeleton width="30%" height={20} style={{ display: 'inline-block' }} />
            <Skeleton width="25%" height={23} />
        </Box>
    );
}

export default ProductFiltersCategoriesSkeletons;