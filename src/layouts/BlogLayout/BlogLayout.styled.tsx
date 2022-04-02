import styled from 'styled-components';

import Layout from '@components/Layout/Layout';
import { Container as StyledDownloadFiles } from '@layouts/BlogLayout/DownloadFiles/DownloadFiles.styled';

export const Container = styled(Layout)`
    max-width: ${({ theme }) => theme.variables.maxWidth};
    margin: 0 auto;
    padding: 100px 0;

    ${StyledDownloadFiles} {
        margin: 40px 0;
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
    padding-top: 40%;
`;
