import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;

  h3 {
    font-size: 22px;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 20px;
  }
  
  span {
    font-size: 18px;
    margin-top: auto;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  flex: 1 0 auto;
  width: 200px;
  height: 200px;
  margin-right: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
