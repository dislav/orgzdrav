import styled from 'styled-components';
import { down } from 'styled-breakpoints';

export const Container = styled.div`
    padding: 160px 0;
    background: ${({ theme }) => theme.colors.gray15};

    ${down('sm')} {
        padding: 40px 20px;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth};
    margin: 0 auto;
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    margin-top: 60px;
    margin-bottom: 40px;

    &:first-of-type {
        margin-top: 0;
    }

    ${down('sm')} {
        font-size: 18px;
    }
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 20px;

    ${down('sm')} {
        flex-direction: column;
    }
`;

export const Col = styled.div`
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    padding: 14px;
    margin-right: 20px;

    &:last-child {
        margin-right: 0;
    }

    ${down('sm')} {
        width: 100%;
        margin-right: 0;
        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;

export const Value = styled.div`
    font-size: 30px;
    font-weight: 700;

    ${down('sm')} {
        font-size: 20px;
    }
`;
