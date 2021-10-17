import styled from 'styled-components';

import Layout from '@components/Layout/Layout';
import { Container as StyledCartSummary } from '@components/CartSummary/CartSummary.styled';

export const Container = styled(Layout)`
  padding: 60px 0;

  ${StyledCartSummary} {
    margin-bottom: 30px;
  }
`;
