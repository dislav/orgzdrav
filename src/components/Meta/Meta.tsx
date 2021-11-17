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

    const metaProps: IMeta = {
        title: `Оргздрав${title ? ` — ${title}` : ''}`,
        description:
            description ||
            `Проект «ORGZDRAV» направлен на помощь клиникам и врачам:\nСопровождение медицинской деятельности.\nАудиты выполнения требований законодательства.\nЛицензирование медицинских организаций.\nПодготовка и сопровождение проверок.\nПодготовка внутренних документов.\nОбучение.`,
        image,
    };

    return (
        <Head>
            <title>{metaProps.title}</title>

            <meta property="og:title" content={metaProps.title} />
            <meta property="twitter:title" content={metaProps.title} />

            <meta
                property="og:url"
                content={`https://orgzdrav2019.ru${router.asPath}`}
            />

            <meta name="description" content={metaProps.description} />
            <meta property="og:description" content={metaProps.description} />
            <meta
                property="twitter:description"
                content={metaProps.description}
            />

            {image && (
                <>
                    <meta property="og:image" content={image} />
                    <meta property="twitter:image" content={image} />
                </>
            )}

          <link rel="icon" type="image/png" href="/favicon.jpeg" />
        </Head>
    );
};

export default Meta;
