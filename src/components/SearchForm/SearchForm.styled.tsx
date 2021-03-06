import styled from 'styled-components';
import {
    CircularProgress as CircularProgressComponent,
    circularProgressClasses,
    textFieldClasses,
} from '@mui/material';

import { Container as InputStyled } from '@components/Input/Input.styled';

export const Container = styled.form``;

export const Input = styled(InputStyled)`
    &.${textFieldClasses.root} {
        width: 100%;
    }
`;

export const CircularProgress = styled(CircularProgressComponent)`
    &.${circularProgressClasses.root} {
        color: ${({ theme }) => theme.colors.primary};
    }
`;
