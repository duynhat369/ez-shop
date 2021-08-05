import { InputLabel } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function PasswordField(props) {
    const { form, name, label } = props;
    const { control } = form;
    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { name, value, onBlur, onChange }, fieldState: { invalid, error } }) => (
                <FormControl error={invalid} margin="normal" fullWidth variant="outlined">
                    <InputLabel>{label}</InputLabel>
                    <OutlinedInput
                        id={name}
                        label={label}
                        error={invalid}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={toggleShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                    />
                    <FormHelperText error={invalid}> {error?.message} </FormHelperText>
                </FormControl>
            )}
        />
    );
}

export default PasswordField;