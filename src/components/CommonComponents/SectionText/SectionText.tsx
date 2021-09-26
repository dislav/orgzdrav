import React from 'react';

import { CommonComponentsProps } from '@graphql/types';
import { Container, Description } from './SectionText.styled';

const SectionText: React.FC<CommonComponentsProps> = ({ title, text }) => {
    return (
        <Container>
            {title && <h3>{title}</h3>}
            {text && <Description dangerouslySetInnerHTML={{ __html: text }} />}
        </Container>
    );
};

export default SectionText;
