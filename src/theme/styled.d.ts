import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        fonts: {
            [key: string]: string;
        },
        colors: {
            [key: string]: string;
            black: string;
            white: string;
            gray05: string;
            gray10: string;
            primary: string;
            telegram: string;
            instagram: string;
            facebook: string;
            vk: string;
            text: string;
            red: string;
            blue: string;
        },
        breakpoints: {
            [key: string]: string | number;
        }
    }
}