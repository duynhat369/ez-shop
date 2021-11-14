import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import productApi from 'api/productApi';
import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import FilterViewer from '../components/Filters/FilterViewer';
import ProductFilters from '../components/ProductFilters';
import ProductList from '../components/ProductList';
import ProductSort from '../components/ProductSort';
import ProductFiltersSkeletons from '../components/Skeletons/ProductFiltersSkeletons';
import ProductListSkeletons from '../components/Skeletons/ProductListSkeletons';

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

    const location = useLocation()
    const history = useHistory()
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search)
        return {
            ...params,
            _page: Number.parseInt(params._page) || 1,
            _limit: Number.parseInt(params._limit) || 8,
            _sort: params._sort || 'salePrice:ASC',
            isPromotion: params.isPromotion === 'true',
            isFreeShip: params.isFreeShip === 'true',
        }
    }, [location.search])

    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 8,
        total: 8,
    })
    // //default query params url
    // const [filters, setFilters] = useState(() => ({
    //     ...queryParams,
    //     _page: Number.parseInt(queryParams._page) || 1,
    //     _limit: Number.parseInt(queryParams._limit) || 8,
    //     _sort: queryParams._sort || 'salePrice:ASC',
    // }))

    // //sync filters to url on change
    // useEffect(() => {
    //     history.push({
    //         pathname: history.location.pathname,
    //         search: queryString.stringify(filters)
    //     })
    // }, [history, filters])

    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(queryParams)
                setProductList(data)
                setPagination(pagination)
            } catch (error) {
                console.log('Failed to fetch product list: ', error)
            }

            setLoading(false)
        })()
    }, [queryParams])

    //handle on page change
    const handlePageChange = (e, page) => {
        // setFilters((preFilters) => ({
        //     ...preFilters,
        //     _page: page,
        // }))
        const filters = {
            ...queryParams,
            _page: page,
        }
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters),
        })
    }

    //handle sort on sale price
    const handleSortChange = (newSortValue) => {
        // setFilters((preFilters) => ({
        //     ...preFilters,
        //     _sort: newSortValue,
        // }))
        const filters = {
            ...queryParams,
            _sort: newSortValue,
        }
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters),
        })
    }

    //handle all filters on filter change
    const handleFiltersChange = (newFilters) => {
        // setFilters((preFilters) => ({
        //     ...preFilters,
        //     ...newFilters,
        // }))
        const filters = {
            ...queryParams,
            ...newFilters,
        }
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters),
        })
    }

    //handle filter viewer on filter change
    const setNewFilters = (newFilters) => {
        // setFilters(newFilters)
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(newFilters),
        })
    }

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            {loading
                                ? <ProductFiltersSkeletons length={8} />
                                : <ProductFilters filters={queryParams} onChange={handleFiltersChange} />
                            }
                        </Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            <ProductSort currentSort={queryParams._sort} onChange={handleSortChange} />
                            <FilterViewer filters={queryParams} onChange={setNewFilters} />

                            {loading ? <ProductListSkeletons length={8} /> : <ProductList data={productList} />}

                            <Box className={classes.pagination}>
                                <Pagination
                                    color="primary"
                                    page={pagination.page}
                                    count={Math.ceil(pagination.total / pagination.limit)}
                                    onChange={handlePageChange}
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