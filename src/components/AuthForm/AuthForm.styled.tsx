import styled from 'styled-components';

export const Container = styled.div`
    width: 560px;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    padding: 30px;

    p {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.black};
        margin-top: 20px;

        > span {
            color: ${({ theme }) => theme.colors.primary};
            text-decoration: underline;
            cursor: pointer;
        }
    }
`;
