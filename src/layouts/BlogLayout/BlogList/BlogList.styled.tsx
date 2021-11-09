import styled from 'styled-components';

import { Container as StyledBlogCard } from "@components/BlogCard/BlogCard.styled";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  ${StyledBlogCard} {
    width: 300px;
  }
`;