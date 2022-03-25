import styled from 'styled-components';

import Layout from '@components/Layout/Layout';

export const Container = styled(Layout)`
    max-width: ${({ theme }) => theme.variables.maxWidth};
    margin: 0 auto;
    padding: 100px 0;
`;
