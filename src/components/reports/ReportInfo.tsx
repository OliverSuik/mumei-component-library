import { Grid, Typography, ThemeProvider } from '@mui/material';
import React from 'react';
import { dropDownOptions, dropDownProps } from "../constants/dropDownOptions";
import { Report } from "../props/reportProps";
import { mumeiTheme } from '../../mumeiStyles';

interface ReportInfoProps {
    data: Report | undefined;
}

export const ReportInfo: React.FC<ReportInfoProps> = ({ data }) => {
    return (
        <ThemeProvider theme={mumeiTheme}>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography variant='h5' color={"textColor.primary"} fontFamily={"Sailec-Medium"} pb={3}>Basic Information</Typography>
                    <Grid container rowSpacing={1.5}>
                        <Grid item xs={6} sm={6} md={6}>
                            <Typography variant='body2'>Report Type</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <Typography variant='body2'>: {data ? dropDownOptions.find((o: dropDownProps) => o.value == data.reportType)?.label : dropDownOptions[3].label}</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <Typography variant='body2'>Date of Incident</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <Typography variant='body2'>: {data && new Date(data.dateOfIncident).toDateString()}</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <Typography variant='body2'>Location of Incident</Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <Typography variant='body2'>: {data?.location}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography variant='h5' color={"textColor.primary"} fontFamily={"Sailec-Medium"} pb={3}>Individuals Evolved</Typography>
                    <Typography variant='body2' pb={3}>{data?.individualsEvolved}</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} height={250}>
                    <Typography variant='h5' color={"textColor.primary"} fontFamily={"Sailec-Medium"} pb={3}>Summary of Incident</Typography>
                    <Typography variant='body2'>{data?.summary}</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} height={250}>
                    <Typography variant='h5' color={"textColor.primary"} fontFamily={"Sailec-Medium"} pb={3}>Attachments</Typography>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}