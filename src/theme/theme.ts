import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    fonts: {},
    variables: {
        maxWidth: '1100px',
    },
    colors: {
        black: '#000000',
        white: '#ffffff',

        gray05: '#f6f6f6',
        gray10: '#cccccc',
        gray15: '#ebebeb',

        primary: '#0b5ba6',
        telegram: '#61a8de',
        instagram: '#f00075',
        facebook: '#1059b2',
        vk: '#597da3',

        text: '#333333',

        red: '#f15e48',
        blue: '#1fb6ff',
        green: '#5cb85c',
        orange: '#f1a348',
        purple: '#9248f1',
    },
    breakpoints: {
        sm: '640px',
        md: '768px',
        xl: '1280px',
        xxl: '1536px',
        fhd: '1920px',
    },
};

export default theme;
