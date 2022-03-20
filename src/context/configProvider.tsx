import React, { createContext, useContext } from 'react';

interface IConfig {
    global: {
        defaultEmail: string;
    };
    header: {
        links: {
            title: string;
            href: string;
        }[];
    };
    order: {
        maxOrderPrice: number;
    };
    regex: {
        email: RegExp;
    };
}

const defaultConfig: IConfig = {
    global: {
        defaultEmail: 'nazimkin18@mail.ru',
    },
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
                title: 'Услуги',
                href: '/services',
            },
            {
                title: 'Вебинары',
                href: '/webinars',
            },
            {
                title: 'Семинары',
                href: '/seminars',
            },
            {
                title: 'Статьи',
                href: '/blog',
            },
            {
                title: 'Информация',
                href: '/information',
            },
            {
                title: 'Акции',
                href: '/stocks',
            },
            {
                title: 'Контакты',
                href: '/contacts',
            },
        ],
    },
    order: {
        maxOrderPrice: 10000,
    },
    regex: {
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
