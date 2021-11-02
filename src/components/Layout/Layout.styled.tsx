import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  max-width: 820px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
`;

export const ImageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.35;
`;