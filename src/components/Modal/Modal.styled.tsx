import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    z-index: 10;
`;

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => rgba(theme.colors.black, 0.3)};
    z-index: -1;
`;

export const Content = styled.div`
    position: relative;
    margin: auto;
`;

export const Close = styled.div`
    position: absolute;
    top: -10px;
    right: -10px;
    width: 36px;
    height: 36px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    transform: translate(100%, -100%);
    cursor: pointer;

    &:before,
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 40%;
        height: 2px;
        background: ${({ theme }) => theme.colors.black};
        transform: translate(-50%, -50%) rotate(45deg);
    }

    &:after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
`;
