import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  padding: 20px 16px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  
  a {
    color: ${({ theme }) => theme.colors.white};
    font-size: 22px;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 14px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
