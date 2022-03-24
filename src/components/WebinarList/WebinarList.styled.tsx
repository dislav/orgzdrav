import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.black};
    font-size: 24px;
    font-weight: 700;
    line-height: 1.3;
    margin: 40px 0 20px;

    &:first-child {
        margin-top: 0;
    }
`;

export const NewBroadcasts = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    ${up('xl')} {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const OldBroadcasts = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    ${up('xl')} {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;
