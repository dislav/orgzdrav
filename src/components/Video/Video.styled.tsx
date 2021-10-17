import styled from 'styled-components';
import ReactPlayer from 'react-player';

export const Container = styled.div`
  position: relative;
  padding-top: 56.25%;
`;

export const Player = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;
