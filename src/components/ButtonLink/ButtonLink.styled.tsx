import styled, {keyframes} from 'styled-components';
import { rgba } from 'polished';

export interface IStyledButtonLink {
  fullWidth?: boolean;
  flare?: boolean;
  variant?: 'telegram' | 'instagram' | 'facebook' | 'vk';
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

export const Container = styled.a<IStyledButtonLink>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : null)};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, variant }) => {
    if (variant) {
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
  border-radius: 6px;
  padding: 16px 20px;
  overflow: hidden;

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

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => rgba(theme.colors.white, 0.1)};
  border-radius: 4px;
  margin-right: 12px;

  > svg {
    width: 60%;
    height: 60%;
  }
  
  &:only-child {
    margin-right: 0;
  }
`;

export const Wrapper = styled.div`
  flex: 1;
`;
