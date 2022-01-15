import styled from 'styled-components';
import { Button as ButtonComponent } from '@mui/material';

export const Container = styled(ButtonComponent)`
  font-size: 14px;
  font-weight: 500;
  
  && {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
