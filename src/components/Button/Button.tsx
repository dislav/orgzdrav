import React from 'react';
import { useRouter } from 'next/router';

import { Container, Icon, Inner, IStyledButton } from './Button.styled';

interface IButton
    extends IStyledButton,
        React.HtmlHTMLAttributes<HTMLButtonElement> {
    className?: string;
    icon?: React.ReactNode;
    href?: string;
    onClick?: () => void;
}

const Button: React.FC<IButton> = ({
    className,
    children,
    icon,
    href,
    onClick,
    ...props
}) => {
    const router = useRouter();

    const onClickHandle = () => {
        if (onClick) {
            onClick();
        } else if (href && /^http/.test(href)) {
            window.open(href);
        } else if (href) {
            router.push(href);
        }
    };

    return (
        <Container className={className} onClick={onClickHandle} {...props}>
            {icon && <Icon>{icon}</Icon>}
            {children && <Inner>{children}</Inner>}
        </Container>
    );
};

export default Button;
