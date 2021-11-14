import ListPage from 'features/Product/pages/ListPage';
import React from 'react';
import { Box } from '@material-ui/core'
import { Switch, Link, NavLink, Route, BrowserRouter as Router } from 'react-router-dom';
import useClock from '../../hooks/useClock';

Clock.propTypes = {

};

function Clock(props) {
    const { timeString } = useClock();
    return (
        <Box>
            {/* type 1 */}
            <Link to="/products">Type 1</Link>

            {/* type 2 */}
            <Router>
                <Link to="/products">Type 2</Link>
                {/* <Switch>
                    <Route path="/products">
                        <ListPage />
                    </Route>
                </Switch> */}
            </Router>
        </Box>
    );
}

export default Clock;