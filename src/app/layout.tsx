"use client";
import StyledComponentsRegistry from "@/lib/registry";
import { theme } from "@/styles/theme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/global";
import { Inter, Roboto_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
            <body>
                <StyledComponentsRegistry>
                    <MuiThemeProvider theme={theme}>
                        <StyledThemeProvider theme={theme}>
                            <>
                                <GlobalStyle />
                                <Header />
                                <main>{children}</main>
                                <Footer />
                            </>
                        </StyledThemeProvider>
                    </MuiThemeProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
