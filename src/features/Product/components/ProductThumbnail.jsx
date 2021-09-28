import { Box } from '@material-ui/core';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import PropTypes from 'prop-types';
import React from 'react';

ProductThumbnail.propTypes = {
    product: PropTypes.object,
};

function ProductThumbnail(props) {
    const { product = {} } = props

    const thumbnailUrl = product.thumbnail
        ? `${STATIC_HOST}${product.thumbnail?.url}`
        : THUMBNAIL_PLACEHOLDER

    return (
        <Box>
            <img src={thumbnailUrl} alt={product.name} width="100%" />
        </Box>
    );
}

export default ProductThumbnail;