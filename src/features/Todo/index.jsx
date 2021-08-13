import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

TodoFeature.propTypes = {};

function TodoFeature(props) {
    const match = useRouteMatch();
    return (
        <>
            <Switch>
                <Route path={match.path} component={ListPage} exact />
                <Route path={`${match.path}/:id`} component={DetailPage} />

                <Route component={NotFound} />
            </Switch>
        </>
    );
}

export default TodoFeature;
