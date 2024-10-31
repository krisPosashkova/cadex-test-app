"use client";
import React from "react";
import styled from "styled-components";
import { Typography, List, ListItem } from "@mui/material";
import { Container } from "@mui/system";
import CustomButton from "@/components/CustomButton";
import { theme } from "@/styles/theme";

const advantages = [
    {
        id: 1,
        title: "Professionalism",
        description:
            "We take pride in the high level of professionalism within our team, delivering services that meet the highest standards.",
    },
    {
        id: 2,
        title: "Quality",
        description:
            "Our work is always aimed at achieving high-quality results. We never compromise on quality and meticulously oversee every stage.",
    },
    {
        id: 3,
        title: "Personalized Approach",
        description:
            "Each project is unique to us. We carefully analyze client needs and develop solutions that perfectly align with their requests.",
    },
    {
        id: 4,
        title: "Reliability",
        description:
            "With us, you can be assured that all projects will be completed on time and with maximum attention to detail.",
    },
    {
        id: 5,
        title: "Support",
        description:
            "We are always ready to assist you at any stage of the process. Our team supports clients and provides timely assistance.",
    },
    {
        id: 6,
        title: "Innovation",
        description:
            "We continuously seek new and more effective ways to accomplish tasks by utilizing modern technologies and methodologies.",
    },
];

const StyledSection = styled.section(({ theme }) => ({
    padding: theme.spacing(10, 0),
}));

const AdvantagesList = styled(List)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: theme.spacing(2),
    listStyle: "none",
    padding: 0,
    marginBottom: theme.spacing(6),

    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
    },
}));
const AdvantagesItem = styled(ListItem)(({ theme }) => ({
    padding: "1rem",
    position: "relative",

    "&:hover": {
        "& h3": {
            "&::after": {
                content: '""',
                transform: "scaleX(1)",
            },
        },
    },

    "& h3::after": {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "4px",
        backgroundColor: theme.palette.secondary.main,
        transform: "scaleX(0)",
        transition: `transform ${theme.custom.opacity}s ease`,
        transformOrigin: "left",
    },
}));

const AdvantagesSection = () => {
    return (
        <StyledSection>
            <Container
                maxWidth="xl"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                <Typography
                    variant="h2"
                    sx={{ marginBottom: 8 }}
                    component="h2"
                    align="center">
                    Our Advantages
                </Typography>

                <AdvantagesList role="list">
                    {advantages.map(({ id, title, description }) => (
                        <AdvantagesItem
                            key={id}
                            role="listitem"
                            sx={{
                                flexDirection: "column",
                                alignItems: "flex-start",
                            }}>
                            <Typography
                                variant="h4"
                                component="h3"
                                sx={{
                                    marginBottom: 2,
                                    position: "relative",
                                }}>
                                {title}
                            </Typography>
                            <Typography
                                variant="body1"
                                color={theme.palette.text.primary}
                                sx={{ marginBottom: 2 }}>
                                {description}
                            </Typography>
                        </AdvantagesItem>
                    ))}
                </AdvantagesList>
                <CustomButton href="/contact-us">Contact Us</CustomButton>
            </Container>
        </StyledSection>
    );
};

export default AdvantagesSection;
