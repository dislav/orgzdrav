import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.main`
    position: relative;
    max-width: 820px;
    width: 100%;
    margin: 0 auto;
    padding: 26px 16px 100px;

    ${up('xl')} {
        padding: 40px 0 140px;
    }
`;
