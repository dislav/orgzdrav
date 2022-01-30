import styled from 'styled-components';

import InputComponent from '@components/Input/Input';
import ButtonComponent from '@components/Button/Button';
import FormErrorsComponent from '@components/FormErrors/FormErrors';

export const Container = styled.form`
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 20px;
        text-align: center;
    }

    & > p {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.black};

        & > span {
            color: ${({ theme }) => theme.colors.primary};
            text-decoration: underline;
            cursor: pointer;
        }
    }
`;

export const Input = styled(InputComponent)`
    && {
        margin-bottom: 20px;
    }
`;

export const Link = styled.span`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
`;

export const FormErrors = styled(FormErrorsComponent)`
    margin: 20px 0;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.black};
`;

export const Button = styled(ButtonComponent)`
    && {
        width: 100%;
        height: 48px;
        margin-bottom: 14px;
    }
`;
