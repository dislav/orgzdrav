import React, { createContext, useContext } from 'react';

interface IConfig {
    header: {
        links: {
            title: string;
            href: string;
        }[];
    };
    order: {
        maxOrderPrice: number;
    };
}

const defaultConfig: IConfig = {
    header: {
        links: [
            {
                title: 'Главная',
                href: '/',
            },
            {
                title: 'Каталог',
                href: '/catalog',
            },
            {
                title: 'Статьи',
                href: '/blog',
            },
            {
                title: 'Документы',
                href: '/documents',
            },
            {
                title: 'Запись на вебинар',
                href: '/webinar',
            },
        ],
    },
    order: {
        maxOrderPrice: 10000,
    },
};

const ConfigContext = createContext(defaultConfig);

export const useConfig = () => useContext(ConfigContext);

interface IConfigProvider {
    config?: Partial<IConfig>;
}

const ConfigProvider: React.FC<IConfigProvider> = ({ children, config }) => {
    const value = {
        ...defaultConfig,
        ...config,
    };

    return (
        <ConfigContext.Provider value={value}>
            {children}
        </ConfigContext.Provider>
    );
};

export default ConfigProvider;
