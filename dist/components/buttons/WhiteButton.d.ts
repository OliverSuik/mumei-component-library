import React from "react";
interface ButtonProps {
    color: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
    title: string;
    onClick?: () => void;
}
export declare const WhiteButton: React.FC<ButtonProps>;
export {};
