import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import { Container as ProductCard } from '@components/ProductCard/ProductCard.styled';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${up('md')} {
    justify-content: space-between;
  }

  ${up('xl')} {
    justify-content: inherit;
  }

  ${ProductCard} {
    width: 100%;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    ${up('md')} {
      width: 48%;
    }

    ${up('xl')} {
      width: 260px;
      margin-right: 20px;

      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
`;
