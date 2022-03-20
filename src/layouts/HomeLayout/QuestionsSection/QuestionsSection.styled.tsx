import styled from 'styled-components';

import ButtonLinkComponent from '@components/ButtonLink/ButtonLink';

export const Container = styled.div`
    background: ${({ theme }) => theme.colors.gray15};
    padding: 80px 0;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
