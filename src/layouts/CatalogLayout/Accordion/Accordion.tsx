import React from 'react';
import { AccordionProps } from '@mui/material';

import { Container, Summary, Details } from './Accordion.styled';

interface IAccordion extends Omit<AccordionProps, 'children'> {
    summary: React.ReactNode;
    details: React.ReactNode;
}

const Accordion: React.FC<IAccordion> = ({ summary, details, ...props }) => {
    return (
        <Container {...props}>
            <Summary>{summary}</Summary>
            <Details>{details}</Details>
        </Container>
    );
};

export default Accordion;
