import { Box, Link, makeStyles } from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';

ProductMenu.propTypes = {

};

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'row no wrap',
        justifyContent: 'center',
        alignItems: 'center',

        padding: theme.spacing(4, 0),
        listStyleType: 'none',
        borderTop: `1px solid ${theme.palette.grey[300]}`,

        '& > li': {
            padding: theme.spacing(2, 4),
        },
        '& > li > a': {
            color: theme.palette.grey[800],
            fontWeight: '600',
        },
        '& > li > a:hover': {
            color: theme.palette.primary.main,
            textDecoration: 'none',
        },
        '& > li > a.active': {
            color: theme.palette.primary.main,
            borderBottom: `2px solid ${theme.palette.primary.main}`,
        },
    },
}))

function ProductMenu(props) {
    const classes = useStyles()
    const { url } = useRouteMatch()

    return (
        <Box component="ul" className={classes.root}>
            <li>
                <Link component={NavLink} to={url} exact>Description</Link>
            </li>
            <li>
                <Link component={NavLink} to={`${url}/additional`} exact>Additional Information</Link>
            </li>
            <li>
                <Link component={NavLink} to={`${url}/reviews`} exact>Reviews</Link>
            </li>
        </Box>
    );
}

export default ProductMenu;