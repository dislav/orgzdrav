import styled from 'styled-components';

import { Container as StyledVideoCard } from "@components/VideoCard/VideoCard.styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Search = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${StyledVideoCard} {
    width: 260px;
    margin-right: 20px;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }
`;