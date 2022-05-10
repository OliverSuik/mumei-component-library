import { createTheme } from '@mui/material';

const breakpoints = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

declare module '@mui/material/styles' {
    interface CustomTheme {
        textColor?: {
            primary?: string;
            secondary?: string;
            body1?: string;
            body2?: string;
            white?: string;
            gray?: string;
            darkBlue?: string;
            lightGray?: string;
            black?: string;
        };
        chipBg?: {
            pending?: string;
            resolved?: string;
            new?: string;
        };
        chipText?: {
            pending?: string;
            resolved?: string;
            new?: string;
        };
    }
    interface Theme extends CustomTheme { }
    interface PaletteOptions extends CustomTheme { }
}

export const mumeiTheme = createTheme({
    palette: {
        primary: {
            main: '#3650a1',
        },
        secondary: {
            main: '#1692DF'
        },
        info: {
            main: '#A5A5A5'
        },
        textColor: {
            primary: '#3650A1',
            secondary: '#1692DF',
            body1: '#3F3F3F',
            body2: '#6D6D6D',
            white: '#FFFFFF',
            gray: '#777777',
            darkBlue: '#1D329D',
            lightGray: '#8B90AB',
            black: '#000000',
        },
        chipBg: {
            pending: '#FFEDCA',
            resolved: '#ACEDC6',
            new: '#DDDBF3',
        },
        chipText: {
            pending: '#9A7226',
            resolved: '#19753E',
            new: '#47428B',
        },
    },
    typography: {
        fontFamily: [
            'Sailec-Regular',
            'Sailec-Light',
            'Sailec-Medium',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),
        h1: {
            fontSize: '50px',
            lineHeight: '62.5px',
            [breakpoints.breakpoints.down('md')]: {
                fontSize: '40px',
            },
        },
        h2: {
            fontSize: '40px',
            lineHeight: '50px'
        },
        h3: {
            fontSize: '30px',
            lineHeight: '37.5px'
        },
        h4: {
            fontSize: '22px',
            lineHeight: '32px',
            [breakpoints.breakpoints.down('md')]: {
                fontSize: '18px',
            },
        },
        h5: {
            fontSize: '18px',
            lineHeight: '32px',
            [breakpoints.breakpoints.down('md')]: {
                fontSize: '18px',
            },
        },
        body1: {
            fontSize: '18px',
            color: '#3F3F3F'
        },
        body2: {
            fontSize: '16px',
            color: '#6D6D6D'
        }
    },
});

export const mumeiContainerStyle = {
    background: '#ffffff',
    backgroundBlendMode: 'normal',
    boxShadow: '0px 4px 20px rgba(186, 198, 255, 0.3)',
    borderRadius: '16px'
};