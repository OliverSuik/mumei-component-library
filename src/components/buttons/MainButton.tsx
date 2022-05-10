import { Button, styled, ThemeProvider } from "@mui/material";
import React from "react";
import { mumeiTheme } from "../../mumeiStyles";

const StyledButton = styled(Button)(({ }) => ({
    ':hover': {
        boxShadow: 'none',
    },
    borderRadius: 45,
    textTransform: 'none',
    boxShadow: 'none',
    padding: '10px 22px',
    fontFamily: 'Sailec-Medium',
}));

interface ButtonProps {
    color: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
    title: string;
    onClick?: () => void;
    variant: "text" | "outlined" | "contained" | undefined;
}

export const MainButton: React.FC<ButtonProps> = ({ color, title, variant, onClick }) => {
    return (
        <ThemeProvider theme={mumeiTheme}>
            <StyledButton color={color} onClick={onClick} variant={variant}>
                {title}
            </StyledButton>
        </ThemeProvider>
    );
};