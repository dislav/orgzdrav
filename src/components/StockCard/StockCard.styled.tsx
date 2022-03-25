import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    ${up('sm')} {
        flex-direction: row;
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
    padding-top: 100%;

    ${up('sm')} {
        width: 40%;
        height: 300px;
        padding-top: 0;
    }
`;

export const Content = styled.div`
    background: ${({ theme }) => theme.colors.white};
    padding: 20px;

    ${up('sm')} {
        width: 60%;
        padding-left: 40px;
    }
`;
