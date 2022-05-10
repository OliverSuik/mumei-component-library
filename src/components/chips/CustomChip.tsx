import {
    Chip,
    ChipProps,
    ThemeProvider
} from '@mui/material';
import React from 'react';
import { Status } from "../Constants/Enums";
import { mumeiTheme } from '../../mumeiStyles';

interface CustomChipProps extends ChipProps {
    bgColor?: 'white';
    label: Status;
}

export const CustomChip: React.FC<CustomChipProps> = ({ label }) => {
    const colorText: string = 'chipText.' + label.toString().toLowerCase();
    const colorBg: string = 'chipBg.' + label.toString().toLowerCase();
    return (
        <ThemeProvider theme={mumeiTheme}>
            <Chip
                label={label}
                size='small'
                sx={{
                    color: colorText,
                    backgroundColor: colorBg,
                    borderRadius: 1,
                    marginRight: 2,
                    marginLeft: 2,
                }} />
        </ThemeProvider>
    )
}