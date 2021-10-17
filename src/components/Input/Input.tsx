import React, { useState } from 'react';
import { UseFormRegister, RegisterOptions, Message } from 'react-hook-form';

import { Container, Label, Error } from './Input.styled';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label?: string;
    name: string;
    register: UseFormRegister<any>;
    options?: RegisterOptions;
    error?: Message;
}

const Input: React.FC<IInput> = ({
    className,
    label,
    register,
    options,
    error,
    ...props
}) => {
    const [value, setValue] = useState('');
    const { onChange, ...input } = register(props.name, options);

    const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        await onChange(e);
        setValue(e.target.value);
    };

    return (
        <Container
            className={className}
            isFill={!!value.length}
            isError={!!error}
        >
            {label && (
                <Label>
                    {label}
                    {options?.required ? <span>*</span> : ''}
                </Label>
            )}
            <input {...input} {...props} onChange={onChangeHandler} />
            {error && <Error>{error}</Error>}
        </Container>
    );
};

export default Input;
