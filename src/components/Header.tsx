// components/Header.tsx
import React from "react";
import { styled } from "styled-components";
import Link from "next/link";
import { Container } from "@mui/material";
import CustomButton from "@/components/CustomButton";
import { theme } from "@/styles/theme";

const HeaderContainer = styled.header(({ theme }) => ({
    position: "sticky",
    top: 0,
    backgroundColor: theme.palette.background.default,
    zIndex: theme.custom.order.header,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    padding: `${theme.spacing(2)} 0`,
}));

const HeaderContent = styled(Container)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: theme.spacing(2),
});

const CompanyName = styled(Link)({
    fontWeight: 700,
    transition: `opacity ${theme.custom.opacity}s ease`,

    "&:hover": {
        opacity: theme.custom.opacity,
    },
});

const NavLinks = styled.nav({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
});

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <HeaderContent maxWidth="xl">
                <CompanyName href="/">Company</CompanyName>
                <NavLinks>
                    <CustomButton href="/contact-us">Contact Us</CustomButton>
                </NavLinks>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default Header;
