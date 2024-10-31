// styles/interfaces.ts

export interface ITextMixin {
    fontSize: string;
    textWeight: string | number;
    lineHeight: string;
}

export interface ITheme {
    colors: {
        primary: string;
        secondary: string;
        success: string;
        danger: string;

        bg: string;
        font: string;
    };

    media: {
        extraLarge: string;
        large: string;
        medium: string;
        small: string;
    };

    sizes: {
        header: { height: number };
        container: { width: number };
        footer: { height: number };
    };

    durations: {
        ms300: number;
    };

    order: {
        header: number;
        modal: number;
    };
}
