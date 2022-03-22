import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        fonts: {
            [key: string]: string;
        };
        variables: {
            maxWidth: string;
        };
        colors: {
            [key: string]: string;
            black: string;
            white: string;
            gray05: string;
            gray10: string;
            gray15: string;
            primary: string;
            telegram: string;
            instagram: string;
            facebook: string;
            vk: string;
            text: string;
            red: string;
            blue: string;
            green: string;
            orange: string;
            purple: string;
        };
        breakpoints: {
            [key: string]: string;
            sm: string;
            md: string;
            xl: string;
            xxl: string;
            fhd: string;
        };
    }
}
