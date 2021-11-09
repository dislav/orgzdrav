import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
`;