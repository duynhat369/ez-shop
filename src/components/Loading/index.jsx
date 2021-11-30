import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { HashLoader } from 'react-spinners';

Loading.propTypes = {
    loading: PropTypes.bool,
};
Loading.defaultProps = {
    loading: false,
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%',
        height: '100vh',

        flexFlow: 'column nowrap',
        alignItems: 'center',
        justifyContent: 'center',

        '& span': {
            fontSize: '3rem',
            fontWeight: '600',
            color: '#3f51b5',
            '& span span': {
                color: theme.palette.warning.light,
            },
        }
    },
}))

function Loading(props) {
    const { loading } = props
    const classes = useStyles()
    return (

        <div className={classes.root}>
            <HashLoader
                color={'#3f51b5'}
                loading={loading}
                size={50}
            />
            <span className="loading">
                <span>Mua Sắm An Toàn Tại
                    <span className={classes.brand}> TyKy</span>
                </span>
            </span>
        </div>
    );
}

export default Loading;