import ClearIcon from '@mui/icons-material/Clear';
import KeyIcon from '@mui/icons-material/Key';
import { Box, IconButton, Modal, Stack, ThemeProvider, Typography } from '@mui/material';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { MainButton } from '../buttons';
import { FormInputText } from '../forms';
import { mumeiTheme } from '../../mumeiStyles';

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

interface IDProps {
    key: string;
}

interface ModalProps {
    open: boolean;
    onClose: () => void;
    onNavigate: () => void;
}

export const ReportModal: React.FC<ModalProps> = ({ open, onClose, onNavigate }) => {
    const [formData, setFormData] = React.useState<IDProps>();
    const methods = useForm<IDProps>();
    const { handleSubmit, control } = methods;

    const onSubmit = (data: IDProps) => {
        setFormData(data);
    };

    return (
        <ThemeProvider theme={mumeiTheme}>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                BackdropProps={{ style: { backgroundColor: 'rgba(255, 255, 255, 0.6)' } }}
            >
                <Box sx={style}>
                    <div>
                        <IconButton color="default" sx={{ padding: 0, float: 'right' }} onClick={onClose}>
                            <ClearIcon fontSize='small' />
                        </IconButton>
                    </div>
                    <KeyIcon color='secondary' sx={{ fontSize: 100, marginLeft: '38%' }} />
                    <Typography id="modal-modal-title" variant="h6" fontFamily='Sailec-Medium' textAlign='center' color='text.primary' mb={3}>
                        Please enter the report key
                    </Typography>
                    <FormInputText name="key" required={true} control={control} label="Report key" />
                    <Stack
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                        spacing={2}
                    >
                        <MainButton variant={'contained'} color={"secondary"} title={'Submit'} onClick={handleSubmit(onSubmit)} />
                    </Stack>

                </Box>
            </Modal>
        </ThemeProvider>
    );
}