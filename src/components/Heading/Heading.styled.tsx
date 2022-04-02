import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
    width: 100%;
    margin-bottom: 20px;

    ${up('xl')} {
        margin-bottom: 60px;
    }
`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 12px;

    ${up('xl')} {
        font-size: 40px;
    }
`;

export const Subtitle = styled.h2`
    font-size: 18px;
    font-weight: 500;
    line-height: 1.2;

    ${up('xl')} {
        font-size: 28px;
    }
`;
