import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    > span {
        color: ${({ theme }) => theme.colors.red};
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 10px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;
