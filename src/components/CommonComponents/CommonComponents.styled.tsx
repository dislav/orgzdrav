import styled from 'styled-components';

export const Error = styled.div`
  font-size: 16px;
  color: red;

  > span {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    padding: 2px 6px;
    margin: 0 4px;
  }
`;
