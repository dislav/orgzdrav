import styled from 'styled-components';
import ButtonComponent from '@components/Button/Button';

export const Container = styled.div`
  max-width: 820px;
  padding: 160px 0 120px;
  margin: 0 auto;

  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 28px;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 40px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding-top: 100%;
  margin-bottom: 40px;
`;

export const Footer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Button = styled(ButtonComponent)`
  flex: 2;
  min-height: 50px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  margin-right: 20px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 820px;
  width: 100%;
  margin: 0 auto;

  > a {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.gray05};
    border-radius: 4px;
    margin-right: 20px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const CartButton = styled.div`
  position: relative;
  width: 20px;
  height: 20px;

  > svg {
    width: 100%;
    height: 100%;
  }
`;

export const CartCounter = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 12px;
  line-height: 1;
  min-width: 16px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 10px;
  padding: 2px 4px;
  transform: translate(35%, -35%);
`;
