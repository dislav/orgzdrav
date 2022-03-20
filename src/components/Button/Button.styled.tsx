import styled from 'styled-components';
import { Button as ButtonComponent, buttonClasses } from '@mui/material';

export const Container = styled(ButtonComponent)`
    &.${buttonClasses.root} {
        font-size: 14px;
        font-weight: 500;
        background-color: ${({ theme }) => theme.colors.primary};
    }
`;
