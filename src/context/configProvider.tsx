import React, { createContext, useContext } from 'react';

interface IConfig {
    global: {
        ymCode: number;
        defaultEmail: string;
    };
    header: {
        links: {
            title: string;
            href: string;
            color?: 'default' | 'primary';
            isNewTab?: boolean;
        }[];
    };
    order: {
        maxOrderPrice: number;
    };
    regex: {
        username: RegExp;
        email: RegExp;
    };
}

const defaultConfig: IConfig = {
    global: {
        ymCode: 87166583,
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
            // {
            //     title: 'Семинары',
            //     href: '/seminars',
            // },
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
            {
                title: 'Курс',
                href: 'https://kurs.orgzdrav.org/',
                color: 'primary',
                isNewTab: true
            }
        ],
    },
    order: {
        maxOrderPrice: 10000,
    },
    regex: {
        username: /^[a-zA-Z0-9]+$/,
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
