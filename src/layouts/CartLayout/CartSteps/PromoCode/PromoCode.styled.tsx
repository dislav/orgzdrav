import styled from 'styled-components';

import InputComponent from '@components/Input/Input';
import ButtonComponent from '@components/Button/Button';
import FormErrors from '@components/FormErrors/FormErrors';

export const Container = styled.form`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px dashed ${({ theme }) => theme.colors.gray10};
  padding: 16px;

  > svg {
    color: ${({ theme }) => theme.colors.gray10};
    width: 30px;
    height: 30px;
    margin-right: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 4px;
`;

export const ApplyPromoCode = styled.span`
  color: ${({ theme }) => theme.colors.gray10};
  font-size: 14px;
  line-height: 1.2;
  text-decoration: underline;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

export const Input = styled(InputComponent)`
  margin-right: 14px;

  input {
    min-height: 40px;
  }
`;

export const Button = styled(ButtonComponent)`
  height: 40px;
  border-radius: 4px;
`;