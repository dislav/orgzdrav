import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: 10;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => rgba(theme.colors.black, 0.3)};
  cursor: pointer;
  z-index: -1;
`;

export const Content = styled.div`
  margin: auto;
`;
