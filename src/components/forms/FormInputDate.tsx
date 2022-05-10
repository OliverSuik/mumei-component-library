import DateFnsUtils from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TextField } from "@mui/material";
import React, { useEffect } from "react";
import { Controller } from "react-hook-form";
import { FormInputProps } from "../props/formInputProps";
import { mumeiTheme } from '../../mumeiStyles';
import { ThemeProvider } from '@mui/material';

export const FormInputDate = ({ name, control, label, defaultDate, required }: FormInputProps) => {
    const [value, setValue] = React.useState<Date | null>(new Date());

    useEffect(() => {
        if (defaultDate) {
            setValue(defaultDate);
        }
    }, []);

    const handleChange = (newValue: Date | null, field: any) => {
        setValue(newValue);
        field.onChange(newValue);
    };

    return (
        <ThemeProvider theme={mumeiTheme}>
            <LocalizationProvider dateAdapter={DateFnsUtils}>
                <Controller
                    name={name}
                    control={control}
                    defaultValue={defaultDate}
                    render={({ field,
                        fieldState: { error }, }) => (
                        <DesktopDatePicker
                            label={label}
                            inputFormat="dd/MM/yyyy"
                            value={value}
                            onChange={(date) => handleChange(date, field)}
                            onOpen={() => field.onChange(value)}
                            renderInput={(field) => <TextField helperText={error ? error.message : " "} size="small" sx={{ input: { color: 'black' }, label: { fontSize: '16px' } }} {...field} />}
                        />
                    )}
                    rules={{
                        required: {
                            value: required,
                            message: label + ' required'
                        },
                    }}
                />
            </LocalizationProvider>
        </ThemeProvider>
    );
};