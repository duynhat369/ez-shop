import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import productApi from 'api/productApi';
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import ProductListSkeletons from '../components/ProductListSkeletons';

const useStyles = makeStyles(theme => ({
    root: {},
    left: {
        width: '250px',
    },
    right: {
        flex: '1 1 0',
    },
}))

function ListPage(props) {
    const classes = useStyles()
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const params = { _page: 1, _limit: 10, }
                const { data } = await productApi.getAll(params)
                setProductList(data)
            } catch (error) {
                console.log('Failed to fetch product list: ', error)
            }

            setLoading(false)
        })()
    }, [])

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            Side bar
                        </Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            {loading ? <ProductListSkeletons /> : <ProductList data={productList} />}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;