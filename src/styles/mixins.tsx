// styles/mixins.ts
import { css } from "styled-components";
import { IWebFontMixin, ITextMixin } from "@/interfaces/styled";

export const webfontMixin = ({
    family,
    file,
    weight = "normal",
    style = "normal",
    formats = [],
}: IWebFontMixin) => {
    const srcs = formats
        .map((format) => {
            if (format === "woff2")
                return `url('/fonts/${file}.woff2') format('woff2')`;
            if (format === "woff")
                return `url('/fonts/${file}.woff') format('woff')`;
            if (format === "ttf")
                return `url('/fonts/${file}.ttf') format('truetype')`;
            if (format === "otf")
                return `url('/fonts/${file}.otf') format('opentype')`;
            if (format === "svg")
                return `url('/fonts/${file}.svg') format('svg')`;
            return "";
        })
        .filter(Boolean)
        .join(", ");

    return css`
        @font-face {
            font-family: ${family};
            src: ${srcs};
            font-weight: ${weight};
            font-style: ${style};
            font-display: swap;
        }
    `;
};

export const textMixin = ({
    fontSize,
    textWeight,
    lineHeight,
}: ITextMixin) => css`
    font-size: ${fontSize};
    font-weight: ${textWeight};
    line-height: ${lineHeight};
`;
