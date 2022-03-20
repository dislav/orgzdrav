import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: ${({ theme }) => theme.colors.gray15};
    padding: 80px 0;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 820px;
    width: 100%;
    margin: 0 auto;

    > a {
        text-decoration: underline;
        margin-bottom: 20px;
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 40px;
`;
