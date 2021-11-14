import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import CartItem from './CartItem';

CartList.propTypes = {
    cartItems: PropTypes.array,
};

const useStyles = makeStyles(theme => ({
    root: {
        padding: '16px 8px',
    },
}))

function CartList(props) {
    const { cartItems = [] } = props
    const classes = useStyles()

    return (
        <Box component="ul" className={classes.root}>
            {cartItems?.map((item) => (
                <li key={item.id}>
                    <CartItem item={item} />
                </li>
            ))}
        </Box>
    );
}

export default CartList;