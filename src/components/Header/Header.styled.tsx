import styled from 'styled-components';

export const Container = styled.header`
  position: sticky;
  top: 0;
  height: 100%;
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
  position: absolute;
  top: ${({ isHidden }) => isHidden ? '-100%' : '52px'};
  left: 50%;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 820px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  padding: 20px 0;
  opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};
  transform: translateX(-50%);
  transition: top 0.3s, opacity 0.3s;
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
