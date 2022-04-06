import styled from 'styled-components';
import { textFieldClasses, buttonClasses } from '@mui/material';

import InputComponent from '@components/Input/Input';
import ButtonComponent from '@components/Button/Button';

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    padding: 20px;

    > p {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 20px;
    }
`;

export const Input = styled(InputComponent)`
    &.${textFieldClasses.root} {
        margin-bottom: 20px;
    }
`;

export const Button = styled(ButtonComponent)`
    &.${buttonClasses.root} {
        height: 46px;
    }
`;
