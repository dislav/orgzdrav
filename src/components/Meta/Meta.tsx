import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useConfig } from "@context/configProvider"

export interface IMeta {
    title?: string;
    description?: string;
    image?: string | null;
}

const Meta: React.FC<IMeta> = ({ title, description, image }) => {
    const router = useRouter();

    const { ymCode } = useConfig().global;

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

            <script
                dangerouslySetInnerHTML={{
                    __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                     m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                     (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                  
                     ym(${ymCode}, "init", {
                          clickmap:true,
                          trackLinks:true,
                          accurateTrackBounce:true,
                          webvisor:true
                     });
                   `,
                }}
            />

            <noscript>
                <div>
                    <img
                        src={`https://mc.yandex.ru/watch/${ymCode}`}
                        style={{
                            position: 'absolute',
                            left: -9999,
                        }}
                        alt=""
                    />
                </div>
            </noscript>

            <script src="//code.jivo.ru/widget/D4MQYGMXoD" async />
        </Head>
    );
};

export default Meta;
