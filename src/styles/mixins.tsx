// styles/mixins.ts
import { css } from "styled-components";
import { ITextMixin } from "@/interfaces/styled";

export const textMixin = ({
    fontSize,
    textWeight,
    lineHeight,
}: ITextMixin) => css`
    font-size: ${fontSize};
    font-weight: ${textWeight};
    line-height: ${lineHeight};
`;
