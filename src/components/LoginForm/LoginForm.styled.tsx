import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import InputComponent from '@components/Input/Input';
import ButtonComponent from '@components/Button/Button';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 560px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 14px;

  ${up('xl')} {
    padding: 30px;
  }
  
  h2 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const Input = styled(InputComponent)`
  margin-bottom: 14px;
`;

export const Button = styled(ButtonComponent)`
  height: 48px;
`;
