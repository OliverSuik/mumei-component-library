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
    interface Theme extends CustomTheme {
    }
    interface PaletteOptions extends CustomTheme {
    }
}
export declare const mumeiTheme: import("@mui/material").Theme;
export declare const mumeiContainerStyle: {
    background: string;
    backgroundBlendMode: string;
    boxShadow: string;
    borderRadius: string;
};
