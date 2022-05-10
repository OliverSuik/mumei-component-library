import {
    MenuItem,
    TextField,
    ThemeProvider
} from '@mui/material';
import React from "react";
import { Controller } from "react-hook-form";
import { mumeiTheme } from "../../mumeiStyles";
import { FormInputProps } from "../props/formInputProps";

export const FormInputDropdown = ({ name, control, label, setValue, defaultValue, required }: FormInputProps) => {
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
                        select
                        helperText={error ? error.message : " "}
                        size="small"
                        error={!!error}
                        onChange={onChange}
                        defaultValue={defaultValue}
                        fullWidth
                        label={label}
                        variant="outlined"
                        sx={{ input: { color: 'black' }, label: { fontSize: '16px' } }}
                    >
                        {setValue.map((option: any) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
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