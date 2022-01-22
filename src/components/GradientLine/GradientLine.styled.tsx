import styled from 'styled-components';

export const Container = styled.div<{ hasChildren?: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 1px;
    color: ${({ theme }) => theme.colors.white};
    margin: 60px 0;

    &:before,
    &:after {
        content: '';
        position: absolute;
        top: 0;
        width: ${({ hasChildren }) => (hasChildren ? 45 : 50)}%;
        height: 100%;
    }

    &:before {
        left: 0;
        background: linear-gradient(
            to left,
            ${({ theme }) => theme.colors.white},
            transparent
        );
    }

    &:after {
        right: 0;
        background: linear-gradient(
            to right,
            ${({ theme }) => theme.colors.white},
            transparent
        );
    }

    > svg {
        width: 14px;
        height: 14px;
    }
`;
