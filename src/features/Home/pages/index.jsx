import { makeStyles } from '@material-ui/core';
import { ShoppingBasket } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    link: {
        display: 'flex',
        width: '100%',
        height: '100vh',

        flexFlow: 'column nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',

        '& span': {
            fontSize: '3rem',
            fontWeight: '600',
            color: '#3f51b5',
            '& span': {
                color: theme.palette.warning.light,
            },
        }
    },
    logo: {
        width: '50px',
        height: '50px',
        color: theme.palette.warning.light,
        '&:hover': {
            color: theme.palette.primary.dark,
        },
    },
}))

function Home(props) {
    const classes = useStyles()

    return (
        <>
            <Link to="/products" className={classes.link}>
                <ShoppingBasket fontSize="large" className={classes.logo} />
                <span>
                    Click Đi Mua Sắm Với
                    <span className={classes.brand}> TyKy</span>
                </span>
            </Link>
        </>
    );
}

export default Home;