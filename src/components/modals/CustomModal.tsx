import { SvgIconComponent } from "@mui/icons-material";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { Box, IconButton, Modal, Typography, ThemeProvider } from '@mui/material';
import * as React from 'react';
import { ModalType } from "../constants/Enums";
import { mumeiTheme } from "../../mumeiStyles";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    borderRadius: 2,
    p: 3,
    boxShadow: '0px 4px 20px rgba(186, 198, 255, 0.9)',
};

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    description: string;
    type: ModalType;
}

type IEnumTpProp<R> = { [key in keyof typeof ModalType]: R };

export const CustomModal: React.FC<ModalProps> = ({ open, onClose, title, description, type }) => {
    const icons: IEnumTpProp<SvgIconComponent> = {
        SUCCESS: CheckIcon,
        ERROR: ErrorOutlineRoundedIcon,
        WARNING: ErrorOutlineRoundedIcon,
    }
    const colors: IEnumTpProp<string> = {
        SUCCESS: 'green',
        ERROR: '#E8619F',
        WARNING: 'orange',
    }
    const IconComponent: SvgIconComponent = icons[type];
    return (
        <ThemeProvider theme={mumeiTheme}>
            <Modal
                open={open}
                onClose={onClose}
                BackdropProps={{ style: { backgroundColor: 'rgba(255, 255, 255, 0.6)' } }}
            >
                <Box sx={style}>
                    <div>
                        <IconButton color="default" sx={{ padding: 0, float: 'right' }} onClick={onClose}>
                            <ClearIcon fontSize='small' />
                        </IconButton>
                    </div>
                    <IconComponent color='success' sx={{ color: colors[type], fontSize: 100, marginLeft: '38%' }} />
                    <Typography id="modal-modal-title" variant="h6" fontFamily='Sailec-Medium' textAlign='center' color={'textColor.primary'}>
                        {title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'center', pb: 3 }}>
                        {description}
                    </Typography>
                </Box>
            </Modal>
        </ThemeProvider>
    );
}