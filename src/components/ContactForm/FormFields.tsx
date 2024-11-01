import React from "react";
import { Controller } from "react-hook-form";
import { FormInput } from "./styles";
import { IFormFieldProps } from "@/interfaces/interface";

export const FormField: React.FC<IFormFieldProps> = ({
    name,
    label,
    control,
    errors,
    multiline = false,
    rows,
    rules,
}) => (
    <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
            <FormInput
                {...field}
                label={label}
                variant="outlined"
                multiline={multiline}
                rows={rows}
                error={!!errors[name]}
                helperText={errors[name]?.message}
            />
        )}
    />
);
