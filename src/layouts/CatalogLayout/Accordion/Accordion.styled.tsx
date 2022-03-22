import styled from 'styled-components';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    accordionClasses,
    accordionSummaryClasses,
    accordionDetailsClasses,
} from '@mui/material';

export const Arrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    will-change: rotate;
    transition: transform 0.3s;
    margin-left: auto;

    svg {
        width: 100%;
        height: 100%;
    }
`;

export const Container = styled(Accordion)`
    &.${accordionClasses.root} {
        border: 1px solid ${({ theme }) => theme.colors.gray10};
        border-radius: 6px;
        box-shadow: none;
        margin-bottom: 14px;

        &:last-of-type {
            margin-bottom: 0;
        }

        &:before {
            display: none;
        }

        &.${accordionClasses.expanded} {
            margin: 14px 0;

            ${Arrow} {
                transform: rotate(180deg);
            }
        }
    }
`;

export const Summary = styled(AccordionSummary)`
    &.${accordionSummaryClasses.root} {
        min-height: 60px;
        padding: 0 20px;
    }
`;

export const Details = styled(AccordionDetails)`
    &.${accordionDetailsClasses.root} {
        padding: 10px 0;
    }
`;
