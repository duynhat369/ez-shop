import PropTypes from 'prop-types';
import React from 'react';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

ProductFilters.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

ProductFilters.defaultProps = {
    onChange: null,
}

function ProductFilters(props) {
    const { filters, onChange } = props

    const handleCategoryChange = (newCategoryFilters) => {
        if (!onChange) return

        const newFilters = {
            'category.id': newCategoryFilters.id,
            'category.name': newCategoryFilters.name,
        }
        onChange(newFilters)
    }

    const handleChange = (values) => {
        if (onChange) onChange(values)
    }

    return (
        <div>
            <FilterByCategory onChange={handleCategoryChange} />
            <FilterByPrice onChange={handleChange} />
            <FilterByService filters={filters} onChange={handleChange} />
        </div>
    );
}

export default ProductFilters;