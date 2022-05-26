import styled, { keyframes } from 'styled-components';
import { down, up } from 'styled-breakpoints';
import { a } from 'react-spring';

import ButtonLink from '@components/ButtonLink/ButtonLink';

const highlight = keyframes`
    0% {
      left: -50%;
    }
    
    94% {
      left: -50%
    }
    
    100% {
        left: 150%;
    }
`;

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
    width: 63%;

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
    flex-direction: column;

    > div {
        flex: 1;
        height: 100%;
        margin-bottom: 10px;

        &:last-child {
            margin-right: 0;
            margin-bottom: 0;
        }

        ${up('md')} {
            margin-right: 10px;
            margin-bottom: 0;
        }
    }

    ${up('md')} {
        flex-direction: row;
        align-items: center;
    }
`;

export const Button = styled(ButtonLink)<{ color?: string }>`
    position: relative;
    font-size: 14px;
    height: 100%;
    background: ${({ theme, color }) =>
        color === 'primary' ? theme.colors.instagram : null};
    padding: 14px 10px;

    &:before {
        display: ${({ color }) => (color === 'primary' ? 'block' : 'none')};
        content: '';
        position: absolute;
        top: 50%;
        width: 20px;
        height: 60px;
        transform: translateY(-50%) rotate(30deg);
        background: ${({ theme }) => theme.colors.white};
        animation: ${highlight} 10s ease-in infinite;
        z-index: 10;
    }
`;

export const Title = styled(a.h1)`
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
