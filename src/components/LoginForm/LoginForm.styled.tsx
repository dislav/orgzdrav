import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import InputComponent from '@components/Input/Input';
import ButtonComponent from '@components/Button/Button';

export const Container = styled.form`
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 20px;
        text-align: center;
    }

    p {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.black};
        margin-top: 20px;

        > span {
            color: ${({ theme }) => theme.colors.primary};
            text-decoration: underline;
            cursor: pointer;
        }
    }
`;

export const Input = styled(InputComponent)`
    margin-bottom: 14px;
`;

export const Button = styled(ButtonComponent)`
    height: 48px;
`;
