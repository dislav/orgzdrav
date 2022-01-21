import styled from 'styled-components';

import InputComponent from '@components/Input/Input';
import ButtonComponent from '@components/Button/Button';

export const Container = styled.form`
    background: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    padding: 20px;
`;

export const Input = styled(InputComponent)`
    margin-bottom: 16px;

    &:last-of-type {
        margin-bottom: 30px;
    }
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
