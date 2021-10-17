import styled from 'styled-components';

import InputComponent from "@components/Input/Input";
import ButtonComponent from "@components/Button/Button";

export const Input = styled(InputComponent)``;

export const Button = styled(ButtonComponent)`
  height: 48px;
`;

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  
  ${Input} {
    margin-bottom: 12px;
  }
`;

export const Group = styled.div`
  display: flex;
  
  ${Input} {
    flex: 1;
    margin-right: 12px;
    
    &:last-child {
      margin-right: 0;
    }
  }
`;