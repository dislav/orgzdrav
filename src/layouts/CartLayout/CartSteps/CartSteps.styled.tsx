import styled from 'styled-components';

import { Container as StyledCartProduct } from "@components/CartProduct/CartProduct.styled";

export const Container = styled.div``;

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  
  ${StyledCartProduct} {
    border-bottom: 1px dashed ${({ theme }) => theme.colors.gray10};
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
`;

export const Price = styled.div`
  margin-left: auto;
`;
