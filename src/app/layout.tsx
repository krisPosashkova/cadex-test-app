"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { baseTheme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/global";
import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({
    weight: ["400", "600"],
    subsets: ["latin"],
    variable: "--font-primary",
    display: "swap",
});

const roboto_mono = Roboto_Mono({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-secondary",
    display: "swap",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className={`${inter.variable} ${roboto_mono.variable}`}>
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
