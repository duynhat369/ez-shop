import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import ListPage from './pages/ListPage';

TodoFeature.propTypes = {};

function TodoFeature(props) {
    const match = useRouteMatch();
    return (
        <>
            <Switch>
                <Route path={match.path} component={ListPage} exact />

                <Route component={NotFound} />
            </Switch>
        </>
    );
}

export default TodoFeature;
