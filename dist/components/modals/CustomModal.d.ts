import * as React from 'react';
import { ModalType } from "../constants/Enums";
interface ModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    description: string;
    type: ModalType;
}
export declare const CustomModal: React.FC<ModalProps>;
export {};
