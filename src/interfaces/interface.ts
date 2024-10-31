import { ButtonProps } from "@mui/material";

export interface ICustomButton extends ButtonProps {
    href?: string;
    onClick?: () => void;
    bgColor?: string;
    textColor?: string;
    children: React.ReactNode;
}
