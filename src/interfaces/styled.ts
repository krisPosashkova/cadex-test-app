// styles/interfaces.ts
export type FontWeight = "normal" | "bold" | "bolder" | "lighter" | number;
export type FontStyle = "normal" | "italic" | "oblique";

export interface IWebFontMixin {
    family: string;
    file: string;
    weight?: FontWeight;
    style?: FontStyle;
    formats?: string[];
}

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

    fonts: {
        f1: string;
        f2: string;
        f3: string;
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
