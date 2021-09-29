import styled from 'styled-components';

import InputComponent from '@components/Input/Input';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 560px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 40px;
`;

export const Input = styled(InputComponent)`
  margin-bottom: 14px;
`;
