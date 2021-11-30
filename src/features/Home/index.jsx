import NotFound from 'components/NotFound';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import Home from './pages';

HomeFeature.propTypes = {

};

function HomeFeature(props) {
    const match = useRouteMatch()
    return (
        <Switch>
            <Route path={match.path} component={Home} exact />
            <Route component={NotFound} />
        </Switch>
    );
}

export default HomeFeature;