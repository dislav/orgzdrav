import styled from 'styled-components';

import { Container as StyledButtonLink } from '@components/ButtonLink/ButtonLink.styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 20px;

  ${StyledButtonLink} {
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.gray15};
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Avatar = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  margin-right: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
  }
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
