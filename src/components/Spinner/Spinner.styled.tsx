import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    animation: ${rotate} 1s linear infinite;
`;
