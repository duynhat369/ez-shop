import { Box, Checkbox, FormControlLabel, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

FilterByService.propTypes = {
    onChange: PropTypes.func,
    filters: PropTypes.object,
};

FilterByService.defaultProps = {
    onChange: null,
    filters: {},
}

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[200]}`
    },

    typography: {
        paddingBottom: theme.spacing(1),
    },

    list: {
        '& span': {
            fontSize: '14px',
        }
    },

}))

function FilterByService(props) {
    const { filters, onChange } = props
    const classes = useStyles()

    const handleChange = (e) => {
        if (!onChange) return
        const { name, checked } = e.target
        onChange({ [name]: checked })
    }

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2" className={classes.typography}>DỊCH VỤ</Typography>

            <ul>
                {[
                    { value: 'isPromotion', label: 'Có khuyến mãi' },
                    { value: 'isFreeShip', label: 'Vận chuyển miễn phí' }
                ].map(service => (
                    <li key={service.value} className={classes.list}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={Boolean(filters[service.value])}
                                    onChange={handleChange}
                                    name={service.value}
                                    color="primary"
                                />
                            }
                            label={service.label}
                        />
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByService;