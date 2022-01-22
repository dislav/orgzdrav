import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import { Container as StyledProfile } from '@components/Profile/Profile.styled';
import Modal from '@components/Modal/Modal';
import {
    Close as StyledModalClose,
    Content as StyledModalContent,
} from '@components/Modal/Modal.styled';

export const Container = styled.header`
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    height: 52px;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: 10;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    max-width: 1100px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0 16px;

    ${up('xl')} {
        padding: 0;
    }
`;

export const Links = styled.div`
    display: none;
    width: 100%;
    height: 100%;

    ${up('sm')} {
        display: flex;
        align-items: center;
    }

    > a {
        font-size: 14px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.white};
        margin-right: 30px;
        cursor: pointer;

        &:last-child {
            margin-right: 0;
        }
    }

    ${StyledProfile} {
        margin-left: auto;
    }
`;

export const Login = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    margin-left: auto;
    cursor: pointer;
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

    ${up('md')} {
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
