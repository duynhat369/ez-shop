import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
    },
    button: {},
}))

function BuyNowButton(props) {
    const classes = useStyles()
    return (
        <form className={classes.root}>
            <Button
                // type="submit"
                className={classes.button}
                variant="contained"
                color="primary"
                fullWidth
                size="large"
            >
                Mua Ngay
            </Button>
        </form>
    );
}

export default BuyNowButton;