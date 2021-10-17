import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100px;
  border-radius: 6px;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => rgba(theme.colors.black, 0.15)};
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.15s, visibility 0.15s;
    z-index: 1;
  }

  &:hover:before {
    opacity: 1;
    visibility: visible;
  }
`;
