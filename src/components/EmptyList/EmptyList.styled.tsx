import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  
  svg {
    width: 26px;
    height: 26px;
    margin-left: 8px;
  }
`;
