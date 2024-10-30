"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { baseTheme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/global";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>
                <StyledComponentsRegistry>
                    <ThemeProvider theme={baseTheme}>
                        <GlobalStyle />
                        {children}
                    </ThemeProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
