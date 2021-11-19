import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

FilterByPrice.propTypes = {
    onChange: PropTypes.func,
};

FilterByPrice.defaultProps = {
    onChange: null,
}

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[200]}`
    },

    typography: {
        paddingBottom: theme.spacing(1),
    },

    textField: {
        '& input': {
            padding: '4px 8px',
        }
    },

    range: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
        '& > span': {
            marginRight: theme.spacing(1),
            marginLeft: theme.spacing(1),
        }
    },
}))

function FilterByPrice(props) {
    const { onChange } = props
    const classes = useStyles()
    const [values, setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    })

    const handlePriceChange = (e) => {
        const { name, value } = e.target
        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }))
    }

    const handlePriceSubmit = () => {
        if (onChange
            && Number.parseInt(values.salePrice_lte)
            && Number.parseInt(values.salePrice_lte) > Number.parseInt(values.salePrice_gte)
        ) onChange(values)
        setValues({
            salePrice_gte: 0,
            salePrice_lte: 0,
        })
    }

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2" className={classes.typography}>KHOẢNG GIÁ</Typography>
            <Box className={classes.range}>
                <TextField
                    className={classes.textField}
                    variant="outlined"
                    name="salePrice_gte"
                    value={values.salePrice_gte}
                    onChange={handlePriceChange}
                />
                <span>-</span>
                <TextField
                    className={classes.textField}
                    variant="outlined"
                    name="salePrice_lte"
                    value={values.salePrice_lte}
                    onChange={handlePriceChange}
                />
            </Box>
            <Button variant="outlined" size="small" color="primary" onClick={handlePriceSubmit}>Áp dụng</Button>
        </Box>
    );
}

export default FilterByPrice;