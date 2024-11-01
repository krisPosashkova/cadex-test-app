// components/Header.tsx

import React from "react";
import { styled } from "styled-components";
import { Container, Typography } from "@mui/material";

const FooterContainer = styled.footer(({ theme }) => ({
    position: "sticky",
    bottom: 0,
    backgroundColor: theme.palette.primary.dark,
    zIndex: theme.custom.order.footer,
    padding: `${theme.spacing(4)} 0`,
    color: theme.palette.text.secondary,
}));

const FooterContent = styled(Container)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
});

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterContent maxWidth="xl">
                <Typography variant="h4" component="p">
                    Some Company 2024
                </Typography>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;
