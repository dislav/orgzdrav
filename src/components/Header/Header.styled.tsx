import styled, { keyframes } from 'styled-components';
import { up } from 'styled-breakpoints';
import { buttonClasses } from '@mui/material';

import { Container as StyledProfile } from '@components/Profile/Profile.styled';
import Modal from '@components/Modal/Modal';
import AuthButton from '@components/AuthButton/AuthButton';
import {
    Close as StyledModalClose,
    Content as StyledModalContent,
} from '@components/Modal/Modal.styled';

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

export const Container = styled.header`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    height: 64px;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 0 20px;
    z-index: 10;

    ${up('md')} {
        padding: 0 40px;
    }
`;

export const Logo = styled.a`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const Link = styled.a<{ color?: 'default' | 'primary' }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    background: ${({ theme, color }) =>
        color === 'primary' ? theme.colors.instagram : null};
    border-radius: 6px;
    padding: ${({ color }) => (color === 'primary' ? '6px 14px' : null)};
    overflow: hidden;

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

export const Links = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${Logo} {
        display: block;
        margin-right: 26px;
    }

    ${Link} {
        display: none;
        margin-right: 36px;
        cursor: pointer;

        &:last-child {
            margin-right: 0;
        }

        ${up('xl')} {
            display: block;
        }
    }

    ${StyledProfile} {
        display: none;
        margin-left: auto;

        ${up('xl')} {
            display: inherit;
        }
    }
`;

export const Login = styled(AuthButton)`
    &.${buttonClasses.root} {
        margin-left: auto;
    }
`;

export const SandwichIcon = styled.div`
    position: relative;
    width: 30px;
    height: 20px;
    color: ${({ theme }) => theme.colors.white};
    margin-left: auto;

    span {
        position: absolute;
        top: 50%;
        width: 100%;
        height: 2px;
        background: currentColor;
        transform: translateY(-50%);
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        width: 100%;
        height: 2px;
        background: currentColor;
    }

    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: currentColor;
    }

    ${up('xl')} {
        display: none;
    }
`;

export const SandwichModal = styled(Modal)`
    ${StyledModalClose} {
        top: 16px;
        right: 16px;
        transform: inherit;
    }

    ${StyledModalContent} {
        width: 100%;
        height: 100%;
    }
`;
