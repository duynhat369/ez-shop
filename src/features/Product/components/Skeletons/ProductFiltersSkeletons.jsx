import { Box, List, ListItem } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';
import React from 'react';

ProductFiltersCategoriesSkeletons.propTypes = {
    length: PropTypes.number,
};

function ProductFiltersCategoriesSkeletons(props) {
    const { length = 6 } = props

    return (
        <Box p={2}>
            {/* Filter by categories */}
            <Skeleton width="80%" height={25} style={{ marginBottom: 16 }} />
            {Array.from(new Array(length)).map((x, index) => (
                <List
                    style={{ marginBottom: 8 }}
                    key={index}
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                >
                    <ListItem style={{ marginTop: 0, padding: 0 }} >
                        <Skeleton width="30%" />
                    </ListItem>
                </List>
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