import { ChipProps } from '@mui/material';
import React from 'react';
import { Status } from "../Constants/Enums";
interface CustomChipProps extends ChipProps {
    bgColor?: 'white';
    label: Status;
}
export declare const CustomChip: React.FC<CustomChipProps>;
export {};
