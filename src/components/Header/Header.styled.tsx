import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import { Container as StyledProfile } from '@components/Profile/Profile.styled';

export const Container = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  height: 52px;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 10;
`;

export const Wrapper = styled.div`
  max-width: 820px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const Links = styled.div`
  display: none;
  
  ${up('sm')} {
    display: flex;
    align-items: center;
    height: 100%;
  }

  > a {
    font-size: 14px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    margin-right: 30px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }
  }
  
  ${StyledProfile} {
    margin-left: auto;
  }
`;

export const Login = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  margin-left: auto;
  cursor: pointer;
`;
