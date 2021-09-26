import styled from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.white};
  margin: 40px 0;

  h3 {
    font-size: 24px;
    line-height: 1.2;
    font-weight: 500;
    margin-bottom: 20px;
  }
`;

export const Description = styled.div`
  > p {
    font-size: 16px;
    line-height: 1.4;
    margin: 20px 0;
  }
`;
