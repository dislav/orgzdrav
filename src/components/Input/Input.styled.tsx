import styled from 'styled-components';

export const Container = styled.label<{ isFill?: boolean; isError?: boolean }>`
  display: flex;
  flex-direction: column;

  input {
    color: ${({ theme }) => theme.colors.black};
    font-size: 16px;
    line-height: 1.2;
    font-weight: 500;
    min-height: 52px;
    border: 1px solid
      ${({ theme, isFill, isError }) => {
        if (isError) return theme.colors.red;
        if (isFill) return theme.colors.primary;
        return theme.colors.gray10;
      }};
    border-radius: 4px;
    padding: 0 14px;
    transition: border 0.3s;
    outline: none;
  }
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 6px;
  
  > span {
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: 14px;
  margin-top: 6px;
`;
