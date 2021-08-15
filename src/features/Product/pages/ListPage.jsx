import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import productApi from 'api/productApi';
import React, { useEffect, useState } from 'react';
import ProductListSkeletons from '../components/ProductListSkeletons';

const useStyles = makeStyles(theme => ({
    root: {},
    left: {
        width: '250px',
    },
    right: {
        flex: '1 1 auto',
    },
}))

function ListPage(props) {
    const classes = useStyles()
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const params = { _page: 2, _limit: 40, }
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
                            {loading ? <ProductListSkeletons /> : <Typography>Product list</Typography>}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;