import { Box, Chip, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

FilterViewer.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',

        margin: theme.spacing(2, 0),

        '& > li': {
            padding: theme.spacing(1),
        }
    }
}))

const FILTER_LIST = [
    {
        id: 1,
        getLabel: () => "Miễn phí vận chuyển",
        isActive: (filters) => filters.isFreeShip,
        isVisible: () => true,
        isRemovable: false,
        onRemove: () => { },
        onToggle: (filters) => {
            const newFilters = { ...filters }
            if (newFilters.isFreeShip) {
                delete newFilters.isFreeShip
            } else {
                newFilters.isFreeShip = true
            }

            return newFilters
        },
    },
    {
        id: 2,
        getLabel: () => "Có khuyến mãi",
        isActive: () => true,
        isVisible: (filters) => filters.isPromotion,
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = { ...filters }
            delete newFilters.isPromotion
            return newFilters
        },
        onToggle: () => { },
    },
    {
        id: 3,
        getLabel: (filters) => `Từ ${filters.salePrice_gte} tới ${filters.salePrice_lte}đ`,
        isActive: () => true,
        isVisible: (filters) => ((Number.parseInt(filters.salePrice_lte) > 0)) && (Object.keys(filters).includes('salePrice_gte') && Object.keys(filters).includes('salePrice_lte')),
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = { ...filters }
            delete newFilters.salePrice_gte
            delete newFilters.salePrice_lte
            return newFilters
        },
        onToggle: () => { },
    },
    {
        id: 4,
        getLabel: (filters) => `${filters['category.name']}`,
        isActive: () => true,
        isVisible: (filters) => filters['category.name'],
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = { ...filters }
            delete newFilters['category.id']
            delete newFilters['category.name']
            return newFilters
        },
        onToggle: () => { },
    },
]

function FilterViewer({ filters, onChange = null }) {
    const classes = useStyles()

    const visibleFilters = useMemo(() => {
        return FILTER_LIST.filter(x => x.isVisible(filters))
    }, [filters])

    return (
        <Box component="ul" className={classes.root}>
            {visibleFilters.map(x => (
                <li key={x.id}>
                    <Chip
                        label={x.getLabel(filters)}
                        color={x.isActive(filters) ? "primary" : "default"}
                        clickable={!x.isRemovable}
                        size="small"
                        onClick={x.isRemovable ? null : () => {
                            if (!onChange) return
                            const newFilters = x.onToggle(filters)
                            onChange(newFilters)
                        }}
                        onDelete={x.isRemovable ? () => {
                            if (!onChange) return
                            const newFilters = x.onRemove(filters)
                            onChange(newFilters)
                        } : null}
                    />
                </li>
            ))}

        </Box>
    );
}

export default FilterViewer;