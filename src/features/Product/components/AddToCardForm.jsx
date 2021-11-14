import { yupResolver } from '@hookform/resolvers/yup';
import { Button, makeStyles, Typography } from '@material-ui/core';
import QuantityField from 'components/form-control/QuantityField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";

AddToCardForm.propTypes = {
    onSubmit: PropTypes.func,
};

const useStyles = makeStyles(theme => ({
    root: {},
    title: {
        marginTop: theme.spacing(2),
    },
    submit: {
        width: '300px',
    },
}))

function AddToCardForm(props) {
    const { onSubmit = null, } = props
    const classes = useStyles()

    const schema = yup.object().shape({
        quantity: yup.number().required('Please enter quantity').min(1, 'Minimum value is 1').typeError('Please enter a number'),
    });

    const form = useForm({
        defaultValues: {
            quantity: 1,
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
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <Typography className={classes.title}>Số Lượng</Typography>
            <QuantityField name="quantity" label="Quantity" form={form} />

            <Button
                disabled={isSubmitting}
                type="submit"
                className={classes.submit}
                variant="contained"
                color="primary"
                fullWidth
                size="large"
            >
                Add to cart
            </Button>
        </form>
    );
}

export default AddToCardForm;