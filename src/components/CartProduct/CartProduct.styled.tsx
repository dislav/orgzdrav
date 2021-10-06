import styled from 'styled-components';

import { Container as StyledCounter } from "@components/Counter/Counter.styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
`;

export const ImageCover = styled.div`
  flex-shrink: 0;
  position: relative;
  width: 60px;
  height: 60px;
  margin-right: 14px;
`;

export const Text = styled.span`
  flex: 0 1 60%;
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  line-height: 1.3;
  padding-right: 20px;
`;

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  
  ${StyledCounter} {
    max-width: 40%;
    margin-right: 40px;
  }
`;

export const Price = styled.span`
  margin-left: auto;
`;
