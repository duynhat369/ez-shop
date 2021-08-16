import { Box, Typography } from '@material-ui/core';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import PropTypes from 'prop-types';
import React from 'react';

Product.propTypes = {
    product: PropTypes.object,
};

Product.defaultProps = {
    product: {},
}

function Product({ product }) {
    const thumbnailUrl = product.thumbnail
        ? `${STATIC_HOST}${product.thumbnail?.url}`
        : THUMBNAIL_PLACEHOLDER
    return (
        <Box padding={1}>
            <Box p={1} minHeight="230px">
                <img src={thumbnailUrl} alt={product.name} width="100%" />
            </Box>
            <Typography variant="body1"> {product.name}</Typography>
            <Typography variant="body2">
                <Box
                    component="span"
                    fontSize="16"
                    fontWeight="bold"
                    mr={1}>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                </Box>
                {product.promotionPercent > 0 ? `-${product.promotionPercent}%` : ''}
            </Typography>
        </Box>
    );
}

export default Product;