import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  margin-left: 16px;
`;