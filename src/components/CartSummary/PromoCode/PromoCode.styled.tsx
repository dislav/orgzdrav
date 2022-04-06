import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import InputComponent from '@components/Input/Input';
import ButtonComponent from '@components/Button/Button';

export const Container = styled.form`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px dashed ${({ theme }) => theme.colors.gray10};
    padding: 16px;

    > svg {
        color: ${({ theme }) => theme.colors.gray10};
        width: 30px;
        height: 30px;
        margin-right: 16px;
    }

    ${up('md')} {
        flex-wrap: nowrap;
    }
`;

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    color: ${({ theme }) => theme.colors.black};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 4px;
`;

export const ApplyPromoCode = styled.span`
    color: ${({ theme }) => theme.colors.gray10};
    font-size: 14px;
    line-height: 1.2;
    text-decoration: underline;
    cursor: pointer;
`;

export const InputWrapper = styled.div`
    display: flex;
    width: 100%;
    margin-top: 20px;

    ${up('md')} {
        flex: 0 1 50%;
        margin-top: 0;
        margin-left: auto;
    }
`;

export const Input = styled(InputComponent)`
    && {
        flex: 1;
        margin-right: 14px;
    }
`;

export const Button = styled(ButtonComponent)`
    && {
        min-width: 140px;
        height: 56px;
    }
`;

export const Coupons = styled.div`
    display: flex;
    align-items: center;
    margin-top: 12px;
`;

export const Coupon = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 20px;
    padding: 4px 4px 4px 10px;
    margin-right: 8px;

    &:last-child {
        margin-right: 0;
    }
`;

export const DeleteCoupon = styled.div`
    position: relative;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    margin-left: 6px;
    transition: background-color 0.15s;
    cursor: pointer;

    &:before,
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50%;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.black};
        transform: translate(-50%, -50%) rotate(45deg);
    }

    &:after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
`;
