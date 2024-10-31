"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "styled-components";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const StyledSection = styled.section(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

const HeroWrapper = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: theme.spacing(4),
    alignItems: "center",
    padding: `${theme.spacing(8)} 0`,

    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr",
    },
}));

const HeroContent = styled(Box)(({ theme }) => ({
    gridColumn: "1 / 3",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),

    [theme.breakpoints.down("md")]: {
        gridColumn: "1 / -1",
    },
}));

const VideoWrapper = styled(Box)(({ theme }) => ({
    height: "100%",
    minHeight: "fit-content",
    gridColumn: "4 / 7",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    [theme.breakpoints.down("md")]: {
        gridColumn: "1 / -1",
    },
}));

const HeroSection: React.FC = () => {
    const videoId = "dQw4w9WgXcQ";
    const videoTitle =
        "Rick Astley - Never Gonna Give You Up (Official Music Video)";

    return (
        <StyledSection>
            <Container maxWidth="xl">
                <HeroWrapper>
                    <HeroContent>
                        <Typography variant="h1" component="h1">
                            Unlock Your Potential
                        </Typography>
                        <Typography variant="body1">
                            Discover innovative solutions designed to help you
                            reach new heights. Our team offers unique services
                            tailored to meet your needs and ensure your success.
                        </Typography>
                    </HeroContent>

                    <VideoWrapper>
                        <LiteYouTubeEmbed
                            aspectHeight={9}
                            aspectWidth={16}
                            id={videoId}
                            title={videoTitle}
                        />
                    </VideoWrapper>
                </HeroWrapper>
            </Container>
        </StyledSection>
    );
};

export default HeroSection;
