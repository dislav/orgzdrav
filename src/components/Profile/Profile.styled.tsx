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

export const Menu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 160px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  transition: opacity 0.3s 0.3s, visibility 0.3s 0.3s, transform 0.3s 0.3s;
  transform: translateY(6px);
  padding: 14px;
  
  > a {
    display: flex;
    color: ${({ theme }) => theme.colors.black};
    font-size: 14px;
    font-weight: 500;
    border-radius: 2px;
    padding: 8px 10px;
    transition: background-color 0.3s;
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray05};
    }
  }
`;

export const Logout = styled.button`
  font-family: Roboto, sans-serif;
  display: flex;
  color: ${({ theme }) => theme.colors.red};
  font-size: 14px;
  font-weight: 500;
  border-radius: 2px;
  padding: 8px 10px;
  background-color: transparent;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray05};
  }
`;