import styled from 'styled-components';

export const Container = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  z-index: 10;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 52px;

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
`;

export const Info = styled.div<{ isHidden?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 820px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  margin: 0 auto;
  padding: 20px 0;
  will-change: transform;
  transform: ${({ isHidden }) => (isHidden ? 'translateY(-100%)' : null)};
  transition: transform 0.3s;
  z-index: -1;

  a {
    font-size: 28px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  p {
    font-size: 14px;
    text-transform: uppercase;
  }
`;
