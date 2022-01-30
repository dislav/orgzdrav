import React from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';

import { Container } from './Input.styled';

const Input: React.FC<TextFieldProps & UseControllerProps<any>> = ({
    control,
    rules,
    shouldUnregister,
    ...props
}) => {
    const {
        field,
        fieldState: { error },
    } = useController({
        name: props.name,
        control,
        defaultValue: props.defaultValue || '',
        rules,
        shouldUnregister,
    });

    return (
        <Container
            variant="outlined"
            error={!!error}
            helperText={error?.message}
            {...field}
            {...props}
        />
    );
};

export default Input;
