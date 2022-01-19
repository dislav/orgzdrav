import React from 'react';
import { InferGetStaticPropsType } from 'next';

import client from '@graphql/client';

import {
    GetWebinarQuery,
    GetWebinarQueryProps,
} from '@graphql/queries/webinar';

import WebinarLayout from '@layouts/WebinarLayout/WebinarLayout';
import CommonComponents from '@components/CommonComponents/CommonComponents';
import WebinarPreview from '@layouts/WebinarLayout/WebinarPreview/WebinarPreview';

const Webinar: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    webinar,
}) => {
    const title = webinar.webinarMain.webinar?.name || webinar.title;

    const image =
        webinar.webinarMain.preview?.sourceUrl ||
        webinar.webinarMain?.webinar?.image?.sourceUrl;

    return (
        <WebinarLayout
            meta={{
                title,
                image,
            }}
            hideFooter
        >
            {image && webinar.webinarMain && (
                <WebinarPreview image={image} webinar={webinar.webinarMain} />
            )}

            {webinar.webinarMain?.webinar && (
                <CommonComponents
                    components={
                        webinar.webinarMain.webinar.productAdditional.content
                    }
                />
            )}
        </WebinarLayout>
    );
};

export const getStaticProps = async () => {
    const { data: webinar } = await client.query<GetWebinarQueryProps>({
        query: GetWebinarQuery,
    });

    return {
        props: {
            webinar: webinar.page,
        },
    };
};

export default Webinar;
