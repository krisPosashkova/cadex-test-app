// components/CustomButton.tsx
import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ICustomButton } from "@/interfaces/interface";

const StyledButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== "bgColor" && prop !== "textColor",
})<ICustomButton>(({ theme, bgColor, textColor }) => ({
    backgroundColor: bgColor || theme.palette.text.primary,
    borderRadius: "10px",
    color: textColor || theme.palette.text.secondary,
    textTransform: "none",
    transition: `opacity ${theme.custom.opacity}s ease`,
    padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
    "&:hover": {
        opacity: theme.custom.opacity,
    },
}));

const CustomButton: React.FC<ICustomButton> = React.memo(
    ({ href, onClick, bgColor, textColor, children, ...props }) => {
        const buttonProps = {
            bgColor,
            textColor,
            ...props,
        };

        return href ? (
            <StyledButton component={Link} href={href} {...buttonProps}>
                {children}
            </StyledButton>
        ) : (
            <StyledButton onClick={onClick} {...buttonProps}>
                {children}
            </StyledButton>
        );
    }
);

export default CustomButton;
