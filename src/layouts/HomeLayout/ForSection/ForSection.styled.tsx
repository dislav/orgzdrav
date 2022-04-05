import styled from 'styled-components';
import { down } from 'styled-breakpoints';

import ButtonLink from '@components/ButtonLink/ButtonLink';

export const Container = styled.div`
    padding: 160px 0;

    ${down('sm')} {
        padding: 40px 20px;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth};
    margin: 0 auto;
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    margin-top: 60px;
    margin-bottom: 40px;

    &:first-of-type {
        margin-top: 0;
    }

    ${down('sm')} {
        font-size: 18px;
        margin-top: 40px;
        margin-bottom: 20px;
    }
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;

    ${down('sm')} {
        flex-direction: column;
    }
`;

export const Button = styled(ButtonLink)`
    flex: 1;
    padding: 10px 20px;
    margin-right: 10px;

    &:last-child {
        margin-right: 0;
    }

    ${down('sm')} {
        width: 100%;
        margin-right: 0;
        margin-bottom: 10px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;
