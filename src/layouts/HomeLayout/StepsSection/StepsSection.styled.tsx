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
    }
`;

export const Steps = styled.div`
    display: flex;

    ${down('sm')} {
        flex-direction: column;
    }
`;

export const Step = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.gray15};
    border-radius: 10px;
    padding: 20px;
    margin-right: 20px;

    &:last-child {
        margin-right: 0;
    }

    span {
        text-align: center;
        font-size: 20px;
        font-weight: 700;

        ${down('sm')} {
            font-size: 16px;
        }
    }

    ol {
        padding-left: 20px;
        margin-top: 30px;

        li {
            font-weight: 500;
            margin-bottom: 10px;

            &:last-of-type {
                margin-bottom: 0;
            }
        }
    }

    ${down('sm')} {
        margin-right: 0;
        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;

export const Button = styled(ButtonLink)`
    margin-top: auto;

    ${down('sm')} {
        margin-left: 0;
    }
`;
