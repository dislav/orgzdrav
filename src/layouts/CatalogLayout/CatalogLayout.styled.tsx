import styled from 'styled-components';

import Layout from "@components/Layout/Layout";

export const Container = styled(Layout)`
  & > h2 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 28px;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 40px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding-top: 100%;
  margin-bottom: 40px;
`;
