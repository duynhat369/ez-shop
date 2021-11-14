import { Box, IconButton, makeStyles, Typography } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { formatPrice } from 'utils';
import { removeFromCart, setQuantity } from '../cartSlice';
import SetQuantityForm from './SetQuantityForm';

CartItem.propTypes = {
    item: PropTypes.object,
};

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        marginBottom: theme.spacing(3),
        '& > span': {
            marginRight: theme.spacing(3),
        },
    },
    thumbnailBox: {
        width: '80px',
        height: '80px',
        marginRight: theme.spacing(3),
    },
    image: {
        width: '100%',
    },
    productName: {
        display: 'inline-block',
        width: '230px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    priceBox: {
        width: '160px',
        marginRight: theme.spacing(1),
        '& > span': {
            marginRight: theme.spacing(1),
        },
    },
    originalPrice: {
        textDecoration: 'line-through',
        fontSize: '0.75rem',
        color: theme.palette.grey[500],
    },
    quantityForm: {
        width: '144px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemPriceTotal: {
        width: '80px',
        color: theme.palette.secondary.main,
    },
}))

function CartItem(props) {
    const { item = {} } = props
    const thumbnailUrl = item.product?.thumbnail
        ? `${STATIC_HOST}${item.product?.thumbnail.url}`
        : THUMBNAIL_PLACEHOLDER

    const classes = useStyles()
    const dispatch = useDispatch()
    const productTotal = item.quantity * item.product.salePrice

    const handleQuantityChange = ({ quantity }) => {
        const action = setQuantity({
            id: item.product.id,
            quantity
        })
        console.log({ action })
        dispatch(action)
    }

    const handleRemoveFromCart = () => {
        const action = removeFromCart(item.id)
        dispatch(action)
    }

    return (
        <Box className={classes.root}>
            <Box component="div" className={classes.thumbnailBox}>
                <img src={thumbnailUrl} alt={item.product?.thumbnail?.name} className={classes.image} />
            </Box>
            <Typography variant="subtitle2" component="span" className={classes.productName} >{item.product.name}</Typography>
            <Box className={classes.priceBox}>
                <Typography variant="subtitle2" component="span">{formatPrice(item.product.salePrice)}</Typography>
                {item.product.isPromotion &&
                    <Typography variant="subtitle2" component="span" className={classes.originalPrice}>{formatPrice(item.product.originalPrice)}</Typography>
                }
            </Box>
            <Box className={classes.quantityForm}>
                <SetQuantityForm onChange={handleQuantityChange} quantity={item.quantity} />
            </Box>
            <Typography variant="subtitle2" component="span" className={classes.itemPriceTotal}>{formatPrice(productTotal)}</Typography>
            <IconButton onClick={handleRemoveFromCart}>
                <DeleteOutline />
            </IconButton>
        </Box>
    );
}

export default CartItem;