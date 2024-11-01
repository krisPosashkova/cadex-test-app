"use client";
import { validationRules } from "./validationRules";
import { useState } from "react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Container, CircularProgress, Typography } from "@mui/material";
import CustomButton from "@/components/CustomButton";
import { FormField } from "./FormFields";
import {
    StyledSection,
    FormContainer,
    FormContact,
    ResponseMessage,
} from "./styles";
import { IFormInputs } from "@/interfaces/interface";

const FORM_FIELDS = [
    {
        name: "name" as keyof IFormInputs,
        label: "Name",
        rules: validationRules.name,
    },
    {
        name: "email" as keyof IFormInputs,
        label: "Email",
        rules: validationRules.email,
    },
    {
        name: "message" as keyof IFormInputs,
        label: "Message",
        rules: validationRules.message,
        multiline: true,
        rows: 4,
    },
];
const ContactForm: React.FC = () => {
    const [response, setResponse] = useState<string | null>(null);
    const [isResponse, setIsResponse] = useState(false);
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IFormInputs>({
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
        setLoading(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setTimeout(() => {
                    setResponse(result.message);
                    reset();
                }, 600);
            }
        } catch (error) {
            console.error("Error:", error);
            setTimeout(() => {
                setResponse("Error processing contact form");
                setIsError(true);
            }, 600);
        } finally {
            setTimeout(() => {
                setIsResponse(true);
                setLoading(false);
            }, 600);

            setTimeout(() => {
                setIsResponse(false);
                setResponse("");
            }, 4000);
        }
    };
    return (
        <StyledSection>
            <Container maxWidth="xl">
                <FormContainer>
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{ marginBottom: 6 }}>
                        We are Here to Help!
                    </Typography>

                    <ResponseMessage
                        variant="h3"
                        className={`${isResponse ? "is-response" : ""} ${
                            isError ? "is-error" : ""
                        }`}>
                        {response}
                    </ResponseMessage>

                    <FormContact
                        className={isResponse ? "is-response" : ""}
                        onSubmit={handleSubmit(onSubmit)}>
                        {FORM_FIELDS.map((field) => (
                            <FormField
                                key={field.name}
                                name={field.name}
                                label={field.label}
                                control={control}
                                errors={errors}
                                multiline={field?.multiline}
                                rows={field?.rows}
                                rules={field.rules}
                            />
                        ))}

                        <CustomButton type="submit" disabled={loading}>
                            {loading ? (
                                <CircularProgress size="20px" />
                            ) : (
                                "Submit"
                            )}
                        </CustomButton>
                    </FormContact>
                </FormContainer>
            </Container>
        </StyledSection>
    );
};

export default ContactForm;
