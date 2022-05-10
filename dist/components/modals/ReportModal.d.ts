import * as React from 'react';
interface ModalProps {
    open: boolean;
    onClose: () => void;
    onNavigate: () => void;
}
export declare const ReportModal: React.FC<ModalProps>;
export {};
