import {
    TextField, ThemeProvider
} from '@mui/material';
import React from "react";
import { Controller } from "react-hook-form";
import { mumeiTheme } from '../../mumeiStyles';
import { FormInputProps } from "../props/formInputProps";

export const FormInputText = ({ name, control, label, multiline, rows, defaultValue, required }: FormInputProps) => {
    return (
        <ThemeProvider theme={mumeiTheme}>
            <Controller
                name={name}
                control={control}
                render={({
                    field: { onChange },
                    fieldState: { error },
                }) => (
                    <TextField
                        helperText={error ? error.message : " "}
                        size="small"
                        error={!!error}
                        onChange={onChange}
                        defaultValue={defaultValue}
                        fullWidth
                        label={label}
                        variant="outlined"
                        multiline={multiline}
                        rows={rows}
                        sx={{ input: { color: 'black' }, label: { fontSize: '16px' } }}
                    />
                )}
                rules={{
                    required: {
                        value: required,
                        message: label + ' required'
                    },
                }}
            />
        </ThemeProvider>
    );
};