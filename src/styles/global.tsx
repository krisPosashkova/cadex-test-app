// src/styles/global.ts
import { createGlobalStyle } from "styled-components";
import { webfontMixin, textMixin } from "./mixins";
import "normalize.css";
import "modern-css-reset";

const fonts = [
    {
        family: "Roboto",
        file: "Roboto-Regular",
        weight: 400,
        formats: ["ttf"],
    },
    {
        family: "Roboto",
        file: "Roboto-Bold",
        weight: 700,
        formats: ["ttf"],
    },
    {
        family: "Inter",
        file: "Inter-Regular",
        weight: 400,
        formats: ["ttf"],
    },
    {
        family: "Inter",
        file: "Inter-Medium",
        weight: 500,
        formats: ["ttf"],
    },
    {
        family: "Inter",
        file: "Inter-SemiBold",
        weight: 600,
        formats: ["ttf"],
    },
    {
        family: "WorkSans",
        file: "WorkSans-Light",
        weight: 300,
        formats: ["ttf"],
    },
];

const fontFaces = fonts.map((item) =>
    webfontMixin({
        family: item.family,
        file: item.file,
        weight: item.weight,
        formats: item.formats,
    })
);
export default createGlobalStyle`
    /* Подключаем шрифты */
    ${fontFaces}

    :root {
        --font-primary: 'Roboto', sans-serif;
        --font-secondary: 'Inter', sans-serif;
    }

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        overflow: hidden;
        overflow-y: auto;
        background-color: ${({ theme }) => theme.colors.bg};
        font-family: var(--font-primary);
        ${textMixin({ fontSize: "16px", textWeight: 400, lineHeight: "1.2" })};
        color: ${({ theme }) => theme.colors.font}; 
    }

    ul,
    ol {
        list-style-type: none;
        padding-left: 0;
        margin: 0;
    }

    button {
        background-color: transparent;
        padding: 0;
        border: none;
        user-select: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;
