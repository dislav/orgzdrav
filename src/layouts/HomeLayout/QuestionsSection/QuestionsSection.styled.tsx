import styled from 'styled-components';

import ButtonLinkComponent from '@components/ButtonLink/ButtonLink';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    > a {
        color: ${({ theme }) => theme.colors.white};
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    margin-bottom: 20px;

    > h2 {
        font-size: 30px;
        font-weight: 700;
        text-transform: uppercase;
    }

    > p {
        font-size: 18px;
    }
`;

export const ButtonLink = styled(ButtonLinkComponent)`
    margin-bottom: 40px;
`;
