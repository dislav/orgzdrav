import React from 'react';

import {
    Container,
    Title,
    Content,
    IStyledTextSection,
} from './TextSection.styled';

interface ITextSection extends IStyledTextSection {
    title?: string;
}

const TextSection: React.FC<ITextSection> = ({ title, children, ...props }) => {
    return (
        <Container {...props}>
            {title && <Title>{title}</Title>}
            <Content>{children}</Content>
        </Container>
    );
};

export default TextSection;
