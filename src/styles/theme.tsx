// src/styles/theme.ts
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        background: {
            default: "#f5f5f5",
            paper: "#c5c5c5",
        },
        text: {
            primary: "#202020",
            secondary: "#f5f5f5",
        },
        primary: {
            main: "#babec2",
            light: "#e0e0e0",
            dark: "#202020",
        },
        secondary: {
            main: "#e782a5",
            light: "#ffb3c1",
            dark: "#b36b7e",
        },
    },

    typography: {
        fontFamily: "var(--font-primary)",
        button: {
            fontSize: "clamp(0.875rem, 1.5vw + 0.5rem, 1.125rem)",
            fontWeight: 400,
            lineHeight: 1.2,
        },

        body1: {
            fontSize: "clamp(0.875rem, 1.5vw + 0.5rem, 1.125rem)",
            fontWeight: 400,
            lineHeight: 1.3,
        },
        h1: {
            fontSize: "clamp(1.5rem, 2vw + 1rem, 3.5rem)",
            fontWeight: 700,
            lineHeight: 1.3,
        },
        h2: {
            fontSize: "clamp(1.25rem, 1.5vw + 0.75rem, 2.5rem)",
            fontWeight: 600,
            lineHeight: 1.3,
        },
        h3: {
            fontSize: "clamp(1rem, 1.5vw + 0.75rem, 2rem)",
            fontWeight: 600,
            lineHeight: 1.3,
        },
        h4: {
            fontSize: "clamp(1rem, 1.5vw + 0.5rem, 1.5rem)",
            fontWeight: 600,
            lineHeight: 1.3,
        },
    },

    custom: {
        opacity: 0.7,

        // z-index
        order: {
            header: 50,
            footer: 50,
            modal: 100,
        },

        // in ms
        durations: {
            ms300: 0.3,
        },
    },
});
