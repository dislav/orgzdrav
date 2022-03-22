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
    display: flex;
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth};
    margin: 0 auto;

    ${down('sm')} {
        flex-direction: column-reverse;
    }
`;

export const Author = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 1 40%;
    margin-right: 80px;

    ${down('sm')} {
        flex: 0 1 auto;
        margin-right: 0;
    }
`;

export const Button = styled(ButtonLink)`
    margin-top: 20px;

    ${down('sm')} {
        margin-top: 12px;
    }
`;

export const Content = styled.div`
    flex: 0 1 60%;

    h3,
    h4,
    p {
        text-align: center;
    }

    h3 {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 20px;

        ${down('sm')} {
            font-size: 20px;
        }
    }

    h4 {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.1;

        ${down('sm')} {
            font-size: 14px;
            margin-bottom: 4px;
        }
    }

    p {
        margin-bottom: 40px;
    }

    ul {
        padding-left: 22px;
        list-style: none;
        margin-bottom: 40px;

        li {
            position: relative;
            font-weight: 500;
            margin-bottom: 10px;

            &:last-of-type {
                margin-bottom: 0;
            }

            &:before {
                content: '';
                position: absolute;
                left: -18px;
                top: 7px;
                width: 8px;
                height: 8px;
                background: ${({ theme }) => theme.colors.primary};
                border-radius: 50%;
            }
        }
    }
`;
