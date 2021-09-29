import React from 'react';
import { UseFormRegister, RegisterOptions } from 'react-hook-form';

import { Container } from './Checkbox.styled';

interface ICheckbox extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    options?: RegisterOptions;
    name: string;
    register: UseFormRegister<any>;
}

const Checkbox: React.FC<ICheckbox> = ({
    className,
    children,
    register,
    options,
    ...props
}) => {
    return (
        <Container className={className}>
            <input
                type="checkbox"
                {...register(props.name, options)}
                {...props}
            />
            {children}
        </Container>
    );
};

export default Checkbox;
