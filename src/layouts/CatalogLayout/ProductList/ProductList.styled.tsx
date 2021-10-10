import styled from 'styled-components';

import { Container as ProductCard } from '@components/ProductCard/ProductCard.styled';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  ${ProductCard} {
    width: 260px;
    margin-right: 20px;
    
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
`;