import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';

export interface IStyledButton {
  textAlign?: 'left' | 'center' | 'right';
  variant?: 'telegram' | 'instagram' | 'facebook' | 'vk';
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
  fullWidth?: boolean;
  flare?: boolean;
}

const linear = keyframes`
  0% {
    left: -50%;
  }
  
  20% {
    left: 150%;
  }
  
  100% {
    left: 150%;
  }
`;

export const Container = styled.button<IStyledButton>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border: none;
  outline: none;
  overflow: hidden;
  cursor: pointer;

  min-width: ${({ fullWidth }) => (fullWidth ? '100%' : null)};
  color: ${({ theme, color }) => color || theme.colors.white};
  background-color: ${({ theme, variant, backgroundColor }) => {
    if (backgroundColor) {
      return backgroundColor;
    } else if (variant) {
      return {
        telegram: theme.colors.telegram,
        instagram: theme.colors.instagram,
        facebook: theme.colors.facebook,
        vk: theme.colors.vk,
      }[variant];
    } else {
      return theme.colors.primary;
    }
  }};
  border-radius: ${({ borderRadius }) => borderRadius || '6px'};
  margin: ${({ margin }) => margin || null};
  padding: ${({ padding }) => padding || '10px 20px'};

  &:before {
    display: ${({ flare }) => (!flare ? 'none' : '')};
    content: '';
    position: absolute;
    left: -50%;
    width: 16px;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.white};
    animation: ${linear} 5s ease-in infinite;
    transform: rotate(45deg);
  }
`;

export const Inner = styled.span`
  flex: 1;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => rgba(theme.colors.white, 0.1)};
  border-radius: 4px;

  > svg {
    width: 60%;
    height: 60%;
  }
`;
