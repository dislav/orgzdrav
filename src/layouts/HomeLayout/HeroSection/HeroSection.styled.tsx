import styled from 'styled-components';
import { down } from 'styled-breakpoints';

import ButtonLink from '@components/ButtonLink/ButtonLink';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 120px 0 180px;

    ${down('sm')} {
        padding: 40px 20px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth};
    margin: 0 auto;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;

    p {
        font-size: 18px;
        margin-bottom: 10px;
    }

    ${down('sm')} {
        width: 100%;
    }
`;

export const List = styled.ul`
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
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
`;

export const Button = styled(ButtonLink)`
    flex: 1;
    font-size: 14px;
    margin-right: 10px;

    &:last-child {
        margin-right: 0;
    }
`;

export const Title = styled.h1`
    font-size: 40px;
    font-weight: 700;
    line-height: 1.1;
    width: 100%;
    margin-bottom: 40px;

    ${down('sm')} {
        font-size: 20px;
        line-height: 1.3;
        margin-bottom: 20px;
    }
`;

export const ImageWrapper = styled.div`
    position: absolute;
    left: 60%;
    bottom: 0;
    width: 22%;
    height: 70%;
    transform: translateX(15%);
    overflow: hidden;

    ${down('sm')} {
        display: none;
    }
`;
