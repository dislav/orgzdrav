import styled from 'styled-components';

export const Container = styled.div`
    margin: 40px 0;
`;

export const Component = styled.div`
    margin: 80px 0;

    &:first-child {
        margin-top: 0;
    }

    &:last-child {
        margin-bottom: 0;
    }
`;
