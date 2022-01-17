import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Unit = styled.div`
    display: flex;
    align-items: center;
    margin-right: 6px;

    &:last-child {
        margin-right: 0;
    }
`;
