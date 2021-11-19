import { Box, makeStyles, Typography } from '@material-ui/core';
import { login } from 'features/Auth/userSlice';
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
    username: {
        marginRight: theme.spacing(1),
        borderRight: '1px solid #bbb',
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
    const userLogin = useSelector(state => state.user.current)
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Box className={classes.user}>
                <Typography variant="body1">Thông tin người nhận:</Typography>
                {userLogin.id &&
                    <>
                        <Typography variant="subtitle2" component="span" className={classes.username}>{userLogin.fullName} </Typography>
                        <Typography variant="subtitle2" component="span">{userLogin.email} </Typography>
                    </>
                }
                {!userLogin.id &&
                    <Typography>Chưa đăng nhập</Typography>
                }
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