import React from 'react';
import { AccordionProps } from '@mui/material';

import { Container, Summary, Arrow, Details } from './Accordion.styled';
import { ChevronDown } from '@icons/icons';

interface IAccordion extends Omit<AccordionProps, 'children'> {
    summary: React.ReactNode;
    details: React.ReactNode;
}

const Accordion: React.FC<IAccordion> = ({ summary, details, ...props }) => {
    return (
        <Container {...props}>
            <Summary>
                {summary}
                <Arrow>
                    <ChevronDown />
                </Arrow>
            </Summary>
            <Details>{details}</Details>
        </Container>
    );
};

export default Accordion;
