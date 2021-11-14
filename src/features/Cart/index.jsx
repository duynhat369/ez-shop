import { Box } from '@material-ui/core';
import NotFound from 'components/NotFound';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListPage from './pages/ListPage';

function CartFeature(props) {
    const match = useRouteMatch()
    return (
        <Box pt={4}>
            <Switch>
                <Route path={match.url} component={ListPage} exact />

                <Route component={NotFound} />
            </Switch>
        </Box>
    );
}

export default CartFeature;