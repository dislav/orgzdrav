import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import PriceComponent from '@components/Price/Price';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 16px;
`;

export const ImageCover = styled.div`
    flex-shrink: 0;
    position: relative;
    width: 60px;
    height: 60px;
    margin-right: 14px;
`;

export const Text = styled.span`
    flex: 0 1 60%;
    color: ${({ theme }) => theme.colors.black};
    font-size: 16px;
    line-height: 1.2;
    padding-right: 14px;

    ${up('md')} {
        font-size: 18px;
        line-height: 1.3;
        padding-right: 20px;
    }
`;

export const RightWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const Price = styled(PriceComponent)`
    margin-left: auto;
`;

export const Remove = styled.div`
    position: relative;
    flex-shrink: 0;
    width: 26px;
    height: 26px;
    background-color: ${({ theme }) => theme.colors.gray05};
    border-radius: 50%;
    margin-left: 20px;
    transition: background-color 0.15s;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.gray15};
    }

    &:before,
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50%;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.red};
        transform: translate(-50%, -50%) rotate(45deg);
    }

    &:after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
`;
