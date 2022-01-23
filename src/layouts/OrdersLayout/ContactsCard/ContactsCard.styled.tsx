import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import ContentSectionComponent from '@components/ContentSection/ContentSection';

export const Container = styled.div`
    background: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    padding: 20px;

    ${up('xl')} {
        padding: 40px;
    }
`;

export const ContentSection = styled(ContentSectionComponent)`
    color: ${({ theme }) => theme.colors.black};
    margin: 0;
`;
