import styled from 'styled-components';
import { up } from 'styled-breakpoints';

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
  flex-direction: column;
  
  ${up('md')} {
    flex-direction: row;
  }
  
  ${Input} {
    flex: 1;

    ${up('md')} {
      margin-right: 12px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
