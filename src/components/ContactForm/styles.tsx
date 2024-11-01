import { styled } from "styled-components";
import { TextField, Box, Typography } from "@mui/material";

export const StyledSection = styled.section(({ theme }) => ({
    padding: theme.spacing(10, 0),
    backgroundColor: theme.palette.background.paper,
    minHeight: "inherit",
}));

export const FormInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputLabel-root": {
        color: theme.palette.text.primary,
    },
}));

export const FormContainer = styled(Box)(({ theme }) => ({
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
    ".MuiTextField-root": {
        marginBottom: theme.spacing(3),
        width: "100%",
        "&:focus-within": {
            ".MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.text.primary,
            },
        },
    },
    ".error-message": {
        color: theme.palette.error.main,
        fontSize: "0.75rem",
        marginTop: theme.spacing(-4),
        marginBottom: theme.spacing(2),
    },
}));

export const FormContact = styled.form(({ theme }) => ({
    padding: theme.spacing(5),
    backgroundColor: theme.palette.background.default,
    borderRadius: "10px",
    transition: `opacity ${theme.custom.durations.ms300}s ease`,

    "&.is-response": {
        opacity: 0,
        visibility: "hidden",
    },
}));

export const ResponseMessage = styled(Typography)(({ theme }) => ({
    transition: `opacity ${theme.custom.durations.ms300}s ease`,
    opacity: 0,
    visibility: "hidden",
    "&.is-response": {
        opacity: 1,
        visibility: "visible",
    },

    "&.is-error": {
        color: theme.palette.error.main,
    },
}));
