import React from 'react';
import Link, { LinkProps } from 'next/link';

import {
    IStyledButtonLink,
    Container,
    Icon,
    Wrapper,
} from './ButtonLink.styled';
import { useConfig } from "@context/configProvider"

interface IButtonLink extends LinkProps {
    className?: string;
    icon?: React.ReactNode;
    options?: IStyledButtonLink;
    ymID?: string;
    target?: string;
}

const ButtonLink: React.FC<IButtonLink> = ({
    className,
    icon,
    children,
    options,
    target,
    ymID,
    ...props
}) => {
    const { ymCode } = useConfig().global;

    const onClick = () => {
        if (ymID) {
            // @ts-ignore
            ym(ymCode, 'reachGoal', ymID);
        }
    };

    return (
        <Link {...props} passHref>
            <Container
                className={className}
                target={target}
                onClick={onClick}
                {...options}
            >
                {icon && <Icon>{icon}</Icon>}
                {children && <Wrapper>{children}</Wrapper>}
            </Container>
        </Link>
    );
};

export default ButtonLink;
