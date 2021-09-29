import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: 40px 0;
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    
    li {
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 14px;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;
