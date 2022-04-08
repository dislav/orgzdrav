import styled from 'styled-components';
import {
    FormControlLabel,
    formControlLabelClasses,
    textFieldClasses,
    buttonClasses,
} from '@mui/material';

import ButtonComponent from '@components/Button/Button';
import FormErrorsComponent from '@components/FormErrors/FormErrors';

export const Container = styled.form`
    display: flex;
    flex-direction: column;

    .${textFieldClasses.root} {
        margin-bottom: 20px;
    }
`;

export const FormErrors = styled(FormErrorsComponent)`
    margin: 20px 0;
`;

export const Link = styled.span`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
`;

export const Accept = styled.div`
    margin-bottom: 30px;
`;

export const AcceptLabel = styled(FormControlLabel)`
    & .${formControlLabelClasses.label} {
        font-size: 14px;
        line-height: 1.2;

        a {
            color: ${({ theme }) => theme.colors.primary};
            text-decoration: underline;
        }
    }
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.black};
`;

export const Button = styled(ButtonComponent)`
    &.${buttonClasses.root} {
        width: 100%;
        height: 48px;
        margin-bottom: 14px;
    }
`;
