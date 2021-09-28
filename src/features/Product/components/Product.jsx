import { Box, makeStyles, Typography } from '@material-ui/core';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';
import { formatPrice } from 'utils';

Product.propTypes = {
    product: PropTypes.object,
};

const useStyles = makeStyles(theme => ({
    root: {
        cursor: 'pointer',
    },
}))

function Product(props) {
    const { product = {} } = props

    const classes = useStyles()
    const history = useHistory()
    const thumbnailUrl = product.thumbnail
        ? `${STATIC_HOST}${product.thumbnail?.url}`
        : THUMBNAIL_PLACEHOLDER

    const handleClickToDetail = () => {
        history.push(`products/${product.id}`)
    }

    return (
        <Box className={classes.root} padding={1} onClick={handleClickToDetail}>
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
                    {formatPrice(product.salePrice)}
                </Box>
                {product.promotionPercent > 0 ? `-${product.promotionPercent}%` : ''}
            </Typography>
        </Box>
    );
}

export default Product;