import { Box, FormControl, IconButton, makeStyles, OutlinedInput } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Add, Remove } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

const useStyles = makeStyles(theme => ({
    quantityForm: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        maxWidth: '170px',
        height: '100%',
    },
}))

function QuantityField(props) {
    const { form, name } = props;
    const { control, setValue } = form;

    const classes = useStyles()

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { name, value, onBlur, onChange }, fieldState: { invalid, error } }) => (
                <FormControl error={invalid} margin="normal" fullWidth variant="outlined" size="small">
                    <Box className={classes.root}>
                        {/* <Typography className={classes.title}>Quantity</Typography> */}
                        <Box className={classes.quantityForm}>
                            {/* if quantity is a falsely -> default set quantity = 1 ( 0 = falsely)*/}
                            <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)} >
                                <Remove />
                            </IconButton>
                            <OutlinedInput
                                id={name}
                                error={invalid}
                                type="number"
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value} />
                            {/* if quantity is a falsely -> default set quantity = 1 */}
                            <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)} >
                                <Add />
                            </IconButton>
                        </Box>
                        <FormHelperText error={invalid}> {error?.message} </FormHelperText>
                    </Box>
                </FormControl>
            )}
        />
    );
}

export default QuantityField;