import { Box, Container, Grid, LinearProgress, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import AddToCardForm from '../components/AddToCardForm';
import ProductDetailInfo from '../components/ProductDetailInfo';
import ProductMenu from '../components/ProductMenu';
import ProductReviews from '../components/ProductReviews';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';
import ProductAdditional from '../components/ProductAdditional';
import ProductDescription from '../components/ProductDescription';
import { useDispatch } from 'react-redux';
import { addToCart } from 'features/Cart/cartSlice';

const useStyles = makeStyles(theme => ({
    root: {
        paddingBottom: theme.spacing(4),
    },
    paper: {
        marginBottom: theme.spacing(6),
    },
    left: {
        width: '400px',
        padding: theme.spacing(1.5),
        borderRight: `1px solid ${theme.palette.grey[300]}`
    },
    right: {
        flex: '1 1 0',
        padding: theme.spacing(1.5),
    },
    progressBar: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
    },
}))

function DetailPageProductById(props) {
    const classes = useStyles()
    const { url } = useRouteMatch()
    const dispatch = useDispatch()

    const { params: { productId }, } = useRouteMatch()

    //use custom hook instead of useEffect
    const { product, isLoading } = useProductDetail(productId)

    if (isLoading) {
        return <LinearProgress className={classes.progressBar} />
    }

    const handleAddToCardSubmit = ({ quantity }) => {
        const action = addToCart({
            id: product.id,
            product,
            quantity
        })
        console.log({ action })
        dispatch(action)
    }

    return (
        <Box className={classes.root}>
            <Container>
                <Paper elevation={0} className={classes.paper}>
                    <Grid container>
                        <Grid item className={classes.left}>
                            <ProductThumbnail product={product} />
                        </Grid>
                        <Grid item className={classes.right}>
                            <ProductDetailInfo product={product} />
                            <AddToCardForm onSubmit={handleAddToCardSubmit} />
                        </Grid>
                    </Grid>
                </Paper>

                <ProductMenu />

                {/* Routing */}
                <Switch>
                    <Route path={url} exact>
                        <ProductDescription product={product} />
                    </Route>
                    <Route path={`${url}/additional`} exact>
                        <ProductAdditional />
                    </Route>
                    <Route path={`${url}/reviews`} exact>
                        <ProductReviews />
                    </Route>
                </Switch>
            </Container>
        </Box>
    );
}

export default DetailPageProductById;