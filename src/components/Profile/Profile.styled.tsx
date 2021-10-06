import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  margin-left: 16px;
`;

export const Menu = styled.div<{ isMenuActive?: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 160px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  transition: opacity 0.3s 0.3s, visibility 0.3s 0.3s, transform 0.3s 0.3s;
  transform: translateY(6px);
  padding: 14px;
`;