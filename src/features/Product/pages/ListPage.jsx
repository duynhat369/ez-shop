import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import productApi from 'api/productApi';
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import ProductListSkeletons from '../components/ProductListSkeletons';
import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
    root: {},
    left: {
        width: '250px',
    },
    right: {
        flex: '1 1 0',
    },
    pagination: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',

        marginTop: '30px',
        paddingBottom: '20px',
    },
}))

function ListPage(props) {
    const classes = useStyles()
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 8,
        total: 8,
    })
    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 8,
    })

    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(filters)
                setProductList(data)
                setPagination(pagination)
            } catch (error) {
                console.log('Failed to fetch product list: ', error)
            }

            setLoading(false)
        })()
    }, [filters])

    const handleOnChange = (e, page) => {
        setFilters((preFilters) => ({
            ...preFilters,
            _page: page
        }))
    }

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
                            {loading ? <ProductListSkeletons length={8} /> : <ProductList data={productList} />}
                            <Box className={classes.pagination}>
                                <Pagination
                                    color="primary"
                                    page={pagination.page}
                                    count={Math.ceil(pagination.total / pagination.limit)}
                                    onChange={handleOnChange}
                                />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;