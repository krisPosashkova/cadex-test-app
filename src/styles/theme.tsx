// theme.ts
import { ITheme } from "@/interfaces/styled";

export const baseTheme: ITheme = {
    colors: {
        primary: "#7986cb",
        secondary: "#2b2b2b",
        success: "#4caf50",
        danger: "#f44336 ",

        bg: "#E5E4E8",
        font: "#19191B",
    },
    fonts: {
        f1: "'Roboto', sans-serif",
        f2: "'Inter', sans-serif",
        f3: "'WorkSans', sans-serif",
    },

    media: {
        extraLarge: "(max-width: 1140px)",
        large: "(max-width: 960px)",
        medium: "(max-width: 720px)",
        small: "(max-width: 540px)",
    },

    // in px
    sizes: {
        header: { height: 56 },
        container: { width: 1200 },
        footer: { height: 128 },
    },

    // in ms
    durations: {
        ms300: 300,
    },

    // z-index
    order: {
        header: 50,
        modal: 100,
    },
};
