import { ButtonProps } from "@mui/material";

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
    control: any;
    errors: any;
    multiline?: boolean;
    rows?: number;
    rules: object;
}
