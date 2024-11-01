import { ButtonProps } from "@mui/material";
import { Control, FieldErrors } from "react-hook-form";

export interface ICustomButtonProps extends ButtonProps {
    href?: string;
    onClick?: () => void;
    bgColor?: string;
    textColor?: string;
    children: React.ReactNode;
}

export interface IFormInputs {
    name: string;
    email: string;
    message: string;
}

export interface IFormFieldProps {
    name: keyof IFormInputs;
    label: string;
    control: Control<IFormInputs>;
    errors: FieldErrors<IFormInputs>;
    multiline?: boolean;
    rows?: number;
    rules: object;
}
