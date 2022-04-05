import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { buttonClasses } from '@mui/material';

import { Container as StyledProfile } from '@components/Profile/Profile.styled';
import Modal from '@components/Modal/Modal';
import AuthButton from '@components/AuthButton/AuthButton';
import {
    Close as StyledModalClose,
    Content as StyledModalContent,
} from '@components/Modal/Modal.styled';

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

export const Links = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${Logo} {
        display: block;
        margin-right: 26px;
    }

    > a {
        display: none;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.white};
        font-weight: 500;
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
