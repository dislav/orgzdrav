import React from 'react';
import { ButtonProps } from '@mui/material';

import { Container } from './Button.styled';
import Spinner from '@components/Spinner/Spinner';

export interface IButton extends ButtonProps {
    className?: string;
    icon?: React.ReactNode;
    isLoading?: boolean;
}

const Button: React.FC<IButton> = ({
    className,
    children,
    icon,
    isLoading,
    onClick,
    ...props
}) => {
    return (
        <Container
            className={className}
            onClick={onClick}
            disabled={props.disabled || isLoading}
            variant="contained"
            disableElevation
            {...props}
        >
            {isLoading ? <Spinner /> : children}
        </Container>
    );
};

export default Button;
