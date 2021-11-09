import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export interface IMeta {
    title?: string;
    description?: string;
    image?: string | null;
}

const Meta: React.FC<IMeta> = ({ title, description, image }) => {
    const router = useRouter();

    const formatTitle = `Оргздрав${title ? ` — ${title}` : ''}`;

    return (
        <Head>
            <title>{formatTitle}</title>

            <meta property="og:title" content={formatTitle}/>
            <meta property="twitter:title" content={formatTitle} />

            <meta property="og:url" content={`https://orgzdrav2019.ru${router.asPath}`} />

            {image && (
                <>
                    <meta property="og:image" content={image} />
                    <meta property="twitter:image" content={image} />
                </>
            )}

            {description && (
                <>
                    <meta name="description" content={description} />
                    <meta property="og:description" content={description} />
                    <meta property="twitter:description" content={description} />
                </>
            )}
        </Head>
    );
};

export default Meta;
