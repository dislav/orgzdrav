import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { buttonClasses } from '@mui/material';

import ModalComponent from '@components/Modal/Modal';
import AuthFormComponent from '@components/AuthForm/AuthForm';
import ButtonComponent from '@components/Button/Button';
import { Content as StyledModalContent } from '@components/Modal/Modal.styled';

export const Modal = styled(ModalComponent)`
    ${down('md')} {
        ${StyledModalContent} {
            width: 100%;
        }
    }
`;

export const AuthForm = styled(AuthFormComponent)`
    ${down('md')} {
        justify-content: center;
        width: 100vw;
        height: 100vh;
    }
`;

export const Button = styled(ButtonComponent)`
    &.${buttonClasses.root} {
        color: ${({ theme }) => theme.colors.white};
    }
`;
