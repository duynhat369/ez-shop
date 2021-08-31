import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Tab, Tabs } from '@material-ui/core';

ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

ProductSort.defaultProps = {
    onChange: null,
}

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1),
    }
}))

function ProductSort(props) {
    const { currentSort, onChange } = props
    const classes = useStyles()

    const handleSortChange = (e, newSortValue) => {
        if (onChange) {
            onChange(newSortValue)
        }
    }

    return (
        <Tabs
            className={classes.root}
            textColor="primary"
            indicatorColor="primary"
            aria-label="disabled tabs example"
            value={currentSort}
            onChange={handleSortChange}
        >
            <Tab label="Giá thấp" value="salePrice:ASC" />
            <Tab label="Giá cao" value="salePrice:DESC" />
        </Tabs>
    );
}

export default ProductSort;