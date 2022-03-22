import styled from 'styled-components';
import { down } from 'styled-breakpoints';

import ButtonLink from '@components/ButtonLink/ButtonLink';

export const Container = styled.div`
    background: ${({ theme }) => theme.colors.gray15};
    padding: 160px 0;

    ${down('sm')} {
        padding: 40px 20px;
    }
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

export const Row = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;

    ${down('sm')} {
        flex-direction: column;
    }
`;

export const Button = styled(ButtonLink)`
    flex: 1;
    padding: 10px 20px;
    margin-right: 10px;

    &:last-child {
        margin-right: 0;
    }

    ${down('sm')} {
        width: 100%;
        margin-right: 0;
        margin-bottom: 10px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;
