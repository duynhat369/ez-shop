import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import PropTypes from 'prop-types'

Register.propTypes = {
    closeDialog: PropTypes.func,
};

Register.defaultProps = {
    closeDialog: null,
}

function Register(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar()

    const handleSubmit = async (values) => {
        try {
            //auto set username = email
            values.username = values.email

            const action = register(values)
            const resultAction = await dispatch(action)
            unwrapResult(resultAction)

            //close Dialog
            const { closeDialog } = props
            if (closeDialog) {
                closeDialog()
            }

            enqueueSnackbar('Successfully register.', { variant: 'success' })
            //do something here on register successfully
        } catch (error) {
            console.log('Failed to register:', error)
        }
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;