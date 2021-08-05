import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputField from 'components/form-control/InputField';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {
    const { onSubmit } = props;
    const schema = yup.object().shape({
        title: yup.string()
            .required('please enter your title')
            .min(5, 'Title is too short'),
    });

    const form = useForm({
        defaultValues: {
            title: '',
        },

        resolver: yupResolver(schema),
    })

    const handleSubmit = (values) => {
        if (onSubmit) {
            onSubmit(values);
        }
        form.reset()
    }

    return (
        <form
            onSubmit={form.handleSubmit(handleSubmit)}
            autoComplete="off"
        >
            <InputField name="title" label="Todo" form={form} />
        </form>
    );
}

export default TodoForm;