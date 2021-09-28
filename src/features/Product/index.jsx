import { Box } from '@material-ui/core';
import NotFound from 'components/NotFound';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailPageProductById from './pages/DetailProductById';
import ListPage from './pages/ListPage';

function ProductFeature() {
    const match = useRouteMatch()
    return (
        <Box pt={4}>
            <Switch>
                <Route path={match.url} component={ListPage} exact />
                <Route path={`${match.url}/:productId`} component={DetailPageProductById} />

                <Route component={NotFound} />
            </Switch>
        </Box>
    );
}

export default ProductFeature;