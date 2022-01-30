import styled from 'styled-components';

import InputComponent from '@components/Input/Input';
import ButtonComponent from '@components/Button/Button';

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    padding: 20px;
`;

export const Input = styled(InputComponent)`
    && {
        margin-bottom: 20px;
    }
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const Button = styled(ButtonComponent)`
    && {
        height: 40px;
        margin-right: 20px;

        &:last-child {
            margin-right: 0;
        }
    }
`;
