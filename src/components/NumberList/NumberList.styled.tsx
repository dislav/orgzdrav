import styled from 'styled-components';

export const Container = styled.ol`
    list-style: none;
    padding-left: 20px;

    li {
        position: relative;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 40px;
        padding-left: 10px;
        z-index: 1;

        &:last-of-type {
            margin-bottom: 0;
        }
    }
`;

export const Value = styled.span`
    position: absolute;
    top: 50%;
    left: 0;
    color: ${({ theme }) => theme.colors.gray10};
    font-size: 56px;
    font-weight: 700;
    transform: translateY(-40%);
    z-index: -1;
`;
