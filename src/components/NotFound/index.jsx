import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%',
        height: '90vh',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        '& > p:first-child': {
            fontSize: '3rem',
            fontWeight: '600',
        }
    },
}))

function NotFound(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <p> ERROR 404</p>
            <p>Sorry, the page you are looking for doesn't exist.</p>
        </div >
    );
}

export default NotFound;