import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from 'utils';
import { cartTotalSelector } from '../selectors';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '16px 8px',
    },
    user: {
        padding: '16px 8px',
    },
    totalBox: {
        padding: '16px 8px',
        '& > ul': {

        },
        '& > ul > li': {
            display: 'flex',
            justifyContent: 'space-between',
        },
    },
    total: {
        color: theme.palette.secondary.main,
    },
}))

function CartTotal(props) {
    const cartTotal = useSelector(cartTotalSelector)
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Box className={classes.user}>
                <Typography variant="body1">Thông tin người nhận:</Typography>
                <Typography variant="subtitle2" component="span">User name | </Typography>
                <Typography variant="subtitle2" component="span">User email</Typography>
            </Box>

            <Box className={classes.totalBox}>
                <ul>
                    <li className={classes.li}>
                        <Typography variant="body1" component="span">Tạm tính </Typography> {formatPrice(cartTotal)}
                    </li>
                    <li>
                        <Typography variant="body1" component="span">Giảm giá: </Typography> 0
                    </li>
                </ul>
                <ul>
                    <li>
                        <Typography variant="body1" component="span">Tổng cộng </Typography>
                        <Typography variant="h5" className={classes.total}> {formatPrice(cartTotal)} </Typography>
                    </li>
                </ul>
            </Box>
        </Box>
    );
}

export default CartTotal;