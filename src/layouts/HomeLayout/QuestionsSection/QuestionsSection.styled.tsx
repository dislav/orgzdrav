import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  > a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: underline;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-bottom: 20px;

  > h2 {
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
  }
  
  > p {
    font-size: 18px;
  }
`;
