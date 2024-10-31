"use client";
import React from "react";
import styled from "styled-components";
import { Typography, Container } from "@mui/material";
import CustomButton from "@/components/CustomButton";

const StyledSection = styled.section(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    textAlign: "center",
    padding: `${theme.spacing(15)} 0`,
}));

const ActionPromptSection: React.FC = () => {
    return (
        <StyledSection>
            <Container maxWidth="xl">
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        marginBottom: 4,
                    }}>
                    Get Started with Us Today!
                </Typography>

                <CustomButton href="/contact-us">Contact Us</CustomButton>
            </Container>
        </StyledSection>
    );
};

export default ActionPromptSection;
