import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import ButtonComponent from '@components/Button/Button';

export const Container = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    height: 64px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0 16px;
    z-index: 10;

    ${up('xl')} {
        height: 80px;
        padding: 0;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
`;

export const Button = styled(ButtonComponent)`
    flex: 1 1 48%;
    min-height: 50px;
`;

export const CartButton = styled.a`
    flex: 1 1 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    min-height: 50px;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.gray05};
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;

    ${up('md')} {
        flex: 1 1 48%;
        margin-left: 20px;
    }

    &:only-child {
        margin-left: 0;
    }
`;

export const CartIconWrapper = styled.div`
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
