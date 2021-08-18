import PropTypes from 'prop-types';
import React from 'react';
import FilterByCategory from './Filters/FilterByCategory';

ProductFilters.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

ProductFilters.defaultProps = {
    onChange: null,
}

function ProductFilters(props) {
    const { filters, onChange } = props

    const handleCategoryChange = (newCategoryId) => {
        if (!onChange) return

        const newFilters = {
            ...filters,
            'category.id': newCategoryId
        }
        onChange(newFilters)
    }

    return (
        <div>
            <FilterByCategory onChange={handleCategoryChange} />
        </div>
    );
}

export default ProductFilters;