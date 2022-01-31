import React from 'react';

import { Post_Postmain_Content_SectionText } from '@graphql';

import { Container, Description } from './SectionText.styled';

const SectionText: React.FC<Post_Postmain_Content_SectionText> = ({
    title,
    text,
}) => {
    return (
        <Container>
            {title && <h3>{title}</h3>}
            {text && <Description dangerouslySetInnerHTML={{ __html: text }} />}
        </Container>
    );
};

export default SectionText;
