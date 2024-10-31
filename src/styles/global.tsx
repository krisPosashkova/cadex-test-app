// src/styles/global.ts
import { createGlobalStyle } from "styled-components";
import { textMixin } from "./mixins";
import "normalize.css";
import "modern-css-reset";

export default createGlobalStyle`

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
        font-family: var(--font-primary), sans-serif;
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
