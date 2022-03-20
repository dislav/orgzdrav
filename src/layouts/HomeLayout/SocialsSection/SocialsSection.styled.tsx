import styled from 'styled-components';

import ButtonLinkComponent from '@components/ButtonLink/ButtonLink';

export const Container = styled.div`
    padding: 80px 0;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1100px;
    width: 100%;
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

export const Row = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    > button {
        flex: 1;
        margin-right: 10px;

        &:last-child {
            margin-right: 0;
        }
    }
`;

export const ButtonLink = styled(ButtonLinkComponent)`
    flex: 1;
    padding: 10px 20px;
    margin-right: 10px;

    &:last-child {
        margin-right: 0;
    }
`;
