import React from 'react';
import Link, { LinkProps } from 'next/link';

import {
    IStyledButtonLink,
    Container,
    Icon,
    Wrapper,
} from './ButtonLink.styled';

interface IButtonLink extends LinkProps {
    className?: string;
    icon?: React.ReactNode;
    options?: IStyledButtonLink;
    target?: string;
}

const ButtonLink: React.FC<IButtonLink> = ({
    className,
    icon,
    children,
    options,
    target,
    ...props
}) => {
    return (
        <Link {...props} passHref>
            <Container className={className} target={target} {...options}>
                {icon && <Icon>{icon}</Icon>}
                {children && <Wrapper>{children}</Wrapper>}
            </Container>
        </Link>
    );
};

export default ButtonLink;
