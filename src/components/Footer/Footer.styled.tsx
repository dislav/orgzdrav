import styled from 'styled-components';
import { up, down } from 'styled-breakpoints';
import ButtonLink from '@components/ButtonLink/ButtonLink';

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
    padding: 120px 0;
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
    margin-bottom: 20px;

    ${up('xl')} {
        margin-bottom: 40px;
    }

    > h2 {
        font-size: 30px;
        font-weight: 700;
        text-transform: uppercase;
    }

    > p {
        font-size: 18px;
    }
    
    &:last-child {
        margin-bottom: 0;
    }
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;

    ${up('sm')} {
        flex-direction: row;
        margin-bottom: 40px;
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
