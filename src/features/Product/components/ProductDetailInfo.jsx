import { Box, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { formatPrice } from 'utils';

ProductDetailInfo.propTypes = {
    product: PropTypes.object,
};

const useStyles = makeStyles(theme => ({
    root: {
        paddingBottom: theme.spacing(2),
        borderBottom: `1px solid ${theme.palette.grey[200]}`,
    },
    description: {
        margin: theme.spacing(2, 0),
    },
    priceBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[100],
    },
    salePrice: {
        margin: theme.spacing(2),
        fontSize: theme.typography.h4.fontSize,
        fontWeight: 'bold',
    },
    originalPrice: {
        margin: theme.spacing(2),
        textDecoration: 'line-through',
    },
    promotionPercent: {
        padding: '5px',
        color: 'red',
        border: `1px solid red`,
    },
}))

function ProductDetailInfo(props) {
    const { product = {}, } = props
    const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product

    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Typography component="h1" variant="h5">{name}</Typography>
            <Typography className={classes.description} variant="body2">{shortDescription}</Typography>

            <Box className={classes.priceBox}>
                <Box component="span" className={classes.salePrice}>{formatPrice(salePrice)}</Box>
                {/* must has promotion -> show */}
                {promotionPercent > 0 && (
                    <>
                        <Box component="span" sx={{ fontSize: '14px', }} className={classes.originalPrice}>{formatPrice(originalPrice)}</Box>
                        <Box component="span" sx={{ fontSize: '14px', }} className={classes.promotionPercent}>{promotionPercent > 0 ? `-${promotionPercent}%` : ''}</Box>
                    </>
                )}
            </Box>
        </Box>
    );
}

export default ProductDetailInfo;