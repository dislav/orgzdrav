import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 160px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 16px;
  
  > h2 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  
  > a {
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    padding: 8px 10px;
    margin-top: auto;
  }
`;

export const Description = styled.div`
  margin-bottom: 20px;
  
  > p {
    font-size: 14px;
    margin: 10px 0;
    
    &:first-child {
      margin-top: 0;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;