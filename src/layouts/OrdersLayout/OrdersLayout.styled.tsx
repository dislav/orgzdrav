import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import Layout from '@components/Layout/Layout';
import { Container as StyledButtonLink } from '@components/ButtonLink/ButtonLink.styled';

export const Container = styled(Layout)`
    display: flex;
    flex-direction: column;
    max-width: ${({ theme }) => theme.variables.maxWidth};
    margin: 0 auto;
    padding: 40px 20px;

    ${up('md')} {
        padding: 8px 40px;
    }

    ${up('xl')} {
        padding: 100px 0;
    }

    & > h1 {
        text-align: center;
        color: ${({ theme }) => theme.colors.white};
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 16px;
    }

    & > p {
        font-size: 18px;
        text-align: center;
        color: ${({ theme }) => theme.colors.white};
        margin-bottom: 20px;
    }

    & > ${StyledButtonLink} {
        margin: 0 auto 40px;
    }
`;
