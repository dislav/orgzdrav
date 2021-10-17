import styled from 'styled-components';

import InputComponent from '@components/Input/Input';
import ButtonComponent from '@components/Button/Button';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled(InputComponent)`
  margin-bottom: 14px;
`;

export const Button = styled(ButtonComponent)`
  height: 48px;
`;
