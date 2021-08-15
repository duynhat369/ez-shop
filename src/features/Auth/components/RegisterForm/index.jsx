import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import { LockOutlined } from '@material-ui/icons';
import InputField from 'components/form-control/InputField';
import PasswordField from 'components/form-control/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

RegisterForm.defaultProps = {
    onSubmit: null,
}

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        paddingTop: theme.spacing(3),
    },
    avatar: {
        margin: "0 auto",
        backgroundColor: theme.palette.secondary.main,
    },
    title: {
        textAlign: 'center',
        margin: theme.spacing(2, 0, 3, 0),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    progress: {
        position: 'absolute',
        top: theme.spacing(0),
        left: 0,
        right: 0,
    },
}))

function RegisterForm(props) {
    const { onSubmit } = props;
    const classes = useStyles()
    const schema = yup.object().shape({
        fullName: yup
            .string()
            .required('Please enter your full name.')
            .test('Should has at least two words', 'Please enter at least two words', (value) => {
                return value.split(' ').length >= 2
            }),
        email: yup
            .string()
            .required('Please enter your email.')
            .email('Invalid email.'),
        password: yup
            .string()
            .required('Please enter your password.')
            .min(6, 'Please enter at least 6 characters.'),
        retypePassword: yup
            .string()
            .required('Please retype your password.')
            .oneOf([yup.ref('password')], 'Retype password dose not match.')
    });

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },

        resolver: yupResolver(schema),
    })

    const handleSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values);
        }
    }

    const { isSubmitting } = form.formState

    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress className={classes.progress} />}
            <Avatar className={classes.avatar}>
                <LockOutlined />
            </Avatar>
            <Typography className={classes.title} component="h3" variant="h5">
                Create An Account
            </Typography>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                autoComplete="off"
            >
                <InputField name="fullName" label="Full Name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <PasswordField name="retypePassword" label="Retype Password" form={form} />

                <Button
                    disabled={isSubmitting}
                    type="submit"
                    className={classes.submit}
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                >Create an account</Button>
            </form>
        </div>
    );
}

export default RegisterForm;