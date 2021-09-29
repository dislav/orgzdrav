import React from 'react';

import { IStyledButton, Container, Icon, Inner } from './Button.styled';
import Spinner from '@components/Spinner/Spinner';

interface IButton
    extends IStyledButton,
        React.HtmlHTMLAttributes<HTMLButtonElement> {
    className?: string;
    icon?: React.ReactNode;
    isDisabled?: boolean;
    isLoading?: boolean;
    onClick?: () => void;
}

const Button: React.FC<IButton> = ({
    className,
    children,
    icon,
    isLoading,
    isDisabled,
    onClick,
    ...props
}) => {
    return (
        <Container
            className={className}
            onClick={onClick}
            disabled={isDisabled || isLoading}
            {...props}
        >
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    {icon && <Icon>{icon}</Icon>}
                    {children && <Inner>{children}</Inner>}
                </>
            )}
        </Container>
    );
};

export default Button;
