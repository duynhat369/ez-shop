import { yupResolver } from '@hookform/resolvers/yup';
import { makeStyles } from '@material-ui/core';
import QuantityField from 'components/form-control/QuantityField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";

SetQuantityForm.propTypes = {
    onChange: PropTypes.func,
    quantity: PropTypes.number,
};

const useStyles = makeStyles(theme => ({
    root: {
        width: '50%',
        // marginLeft: theme.spacing(2),
        '& button': {
            display: 'none',
        },
    },
}))

function SetQuantityForm(props) {
    const { onChange = null, quantity = 0 } = props
    const classes = useStyles()

    const schema = yup.object().shape({
        quantity: yup.number().required('Please enter quantity').min(0, 'Minimum value is 1').typeError('Please enter a number'),
    });

    const form = useForm({
        defaultValues: {
            quantity: quantity,
        },
        resolver: yupResolver(schema),
    })

    const handleInputChange = async (values) => {
        if (onChange) {
            await onChange(values);
        }
    }

    return (
        <form onChange={form.handleSubmit(handleInputChange)} className={classes.root}>
            <QuantityField name="quantity" label="quantity" form={form} />
        </form>
    );
}

export default SetQuantityForm;