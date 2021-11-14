import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import CartList from '../components/CartList';
import CartTotal from '../components/CartTotal';

ListPage.propTypes = {

};

const useStyles = makeStyles(theme => ({
    root: {},
    typo: {
        marginBottom: theme.spacing(2),
    },
    left: {
        width: '850px',
    },
    right: {
        flex: '1 1 0',
    },
    cartHeading: {
        marginBottom: theme.spacing(2),
        padding: '8px 16px',
        '& > p': {
            display: 'inline-block',
        },
    },
    productName: {
        width: '325px',
        marginRight: theme.spacing(3),
    },
    priceBox: {
        width: '168px',
    },
    quantityForm: {
        width: '140px',
        textAlign: 'center',
    },
    productPriceTotal: {
        width: '104px',
    },
}))

function ListPage(props) {
    const classes = useStyles()
    const cartItems = useSelector((state) => state.cart.cartItems)
    console.log({ cartItems })

    return (
        <>
            {cartItems.length === 0 ?
                <Container>
                    <Typography variant="h5"> Chưa có sản phẩm trong giỏ hàng</Typography>
                </Container>
                : <Box>
                    <Container>
                        <Typography variant="h6" component="h3" className={classes.typo}>GIỎ HÀNG</Typography>
                        <Grid container spacing={1}>
                            <Grid item className={classes.left}>
                                <Paper elevation={0}>
                                    <Box className={classes.cartHeading}>
                                        <Typography variant="body2" className={classes.productName}>Sản Phẩm</Typography>
                                        <Typography variant="body2" className={classes.priceBox}>Đơn Giá</Typography>
                                        <Typography variant="body2" className={classes.quantityForm}>Số Lượng</Typography>
                                        <Typography variant="body2" className={classes.productPriceTotal}>Thành Tiền</Typography>
                                    </Box>
                                </Paper>
                                <Paper elevation={0}>
                                    <CartList cartItems={cartItems} />
                                </Paper>
                            </Grid>
                            <Grid item className={classes.right}>
                                <Paper elevation={0}>
                                    <CartTotal />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            }
        </>
    );
}

export default ListPage;