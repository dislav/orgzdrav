import styled from 'styled-components';

import Layout from '@components/Layout/Layout';
import { Container as StyledDownloadFiles } from '@layouts/BlogLayout/DownloadFiles/DownloadFiles.styled';

export const Container = styled(Layout)`
    ${StyledDownloadFiles} {
        margin: 40px 0;
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
    padding-top: 100%;
`;
