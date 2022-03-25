import React from 'react';

import { Container, Title, Subtitle } from './Heading.styled';

interface IHeading {
    className?: string;
    title: string;
    subtitle?: string;
}

const Heading: React.FC<IHeading> = ({ className, title, subtitle }) => {
    return (
        <Container className={className}>
            <Title>{title}</Title>
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Container>
    );
};

export default Heading;
