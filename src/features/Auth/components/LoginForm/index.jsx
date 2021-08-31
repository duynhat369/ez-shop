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

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
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

function LoginForm(props) {
    const { onSubmit } = props;
    const classes = useStyles()
    const schema = yup.object().shape({
        identifier: yup
            .string()
            .required('Please enter your email.')
            .email('Invalid email.'),
        password: yup
            .string()
            .required('Please enter your password.'),
    });

    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
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
                Sign In
            </Typography>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                autoComplete="off"
            >
                <InputField name="identifier" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />

                <Button
                    disabled={isSubmitting}
                    type="submit"
                    className={classes.submit}
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                >Sign in</Button>
            </form>
        </div>
    );
}

export default LoginForm;