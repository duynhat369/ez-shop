import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';

ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

ProductSort.defaultProps = {
    onChange: null,
}

function ProductSort(props) {
    const { currentSort, onChange } = props

    const handleSortChange = (e, newSortValue) => {
        if (onChange) {
            onChange(newSortValue)
        }
    }

    return (
        <Tabs
            textColor="primary"
            indicatorColor="primary"
            aria-label="disabled tabs example"
            value={currentSort}
            onChange={handleSortChange}
        >
            <Tab label="Giá thấp tới cao" value="salePrice:ASC" />
            <Tab label="Giá cao xuống thấp" value="salePrice:DESC" />
        </Tabs>
    );
}

export default ProductSort;