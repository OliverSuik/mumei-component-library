import { createSvgIcon, createTheme, styled, Button, ThemeProvider, Chip, Grid, Typography, TextField, MenuItem, Modal, Box, IconButton, Stack } from '@mui/material';
import * as React from 'react';
import React__default, { useEffect } from 'react';
import { ThemeProvider as ThemeProvider$1 } from '@emotion/react';
import DateFnsUtils from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Controller, useForm } from 'react-hook-form';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import KeyIcon from '@mui/icons-material/Key';

var MumeiLogo = createSvgIcon(React__default.createElement("svg", { width: "155", height: "80", viewBox: "0 0 155 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React__default.createElement("path", { d: "M99.5363 33.5716C90.6505 33.5716 83.453 26.5268 83.453 17.8295C83.453 9.13216 90.6505 2.08735 99.5363 2.08735C108.422 2.08735 115.62 9.13216 115.62 17.8295C115.62 26.5268 108.422 33.5716 99.5363 33.5716ZM54.574 33.5716C45.6882 33.5716 38.4907 26.5268 38.4907 17.8295C38.4907 9.13216 45.6882 2.08735 54.574 2.08735C63.4599 2.08735 70.6574 9.13216 70.6574 17.8295C70.6574 26.5268 63.4599 33.5716 54.574 33.5716ZM122.462 14.8724C122.373 14.4375 120.862 14.9594 118.73 13.8287C116.775 12.785 116.686 10.0889 114.465 7.65362C111.177 3.04405 105.756 0 99.5363 0C93.4051 0 87.9848 2.95708 84.697 7.47968L84.6081 7.56665C83.3641 8.95822 82.2978 12.1762 77.8549 12.0892C77.4995 12.0892 77.0552 12.0892 76.4332 12.0892C71.9903 12.1762 70.924 8.95822 69.68 7.56665C69.68 7.47968 69.5911 7.47968 69.5911 7.47968C66.1256 2.95708 60.7053 0 54.574 0C48.354 0 42.8448 3.04405 39.557 7.65362C37.3355 10.0889 37.2467 12.785 35.2918 13.8287C33.1592 14.9594 31.6486 14.4375 31.5598 14.8724C31.4709 15.3072 31.2043 20.0908 31.5598 20.3517C31.9152 20.6996 34.4921 19.1341 35.825 21.3954C38.0464 25.2222 39.0239 27.8314 39.9124 28.5271C43.289 32.8758 48.5317 35.6589 54.4852 35.6589C63.4599 35.6589 70.924 29.3099 72.4346 21.0475C73.1454 18.6122 73.9452 16.177 76.9663 16.09C79.9875 16.177 80.7872 18.6122 81.4981 21.0475C83.0976 29.3969 90.5616 35.6589 99.5363 35.6589C105.49 35.6589 110.821 32.8758 114.109 28.5271C114.998 27.7444 116.064 25.2222 118.285 21.3084C119.529 19.1341 122.106 20.6996 122.462 20.3517C122.817 20.1777 122.639 15.3072 122.462 14.8724Z", fill: "#1D329D" }),
    React__default.createElement("path", { d: "M28.1037 55.2121C24.0959 55.2121 21.2122 57.1802 19.7459 59.9448C18.2308 56.9459 15.2493 55.2121 11.5836 55.2121C7.67354 55.2121 5.18086 57.0396 4.00783 59.2419V55.6339H0V79.5314H4.20333V65.5677C4.20333 61.9597 6.74489 58.9608 10.7039 58.9608C14.2229 58.9608 16.6178 61.538 16.6178 65.5209V79.5314H20.8701V64.7243C21.2122 61.4911 23.5094 58.9608 27.1262 58.9608C30.8897 58.9608 33.1868 61.538 33.1868 65.5209V79.5314H37.3902V64.9586C37.3902 59.1482 33.6267 55.2121 28.1037 55.2121Z", fill: "#1D329D" }),
    React__default.createElement("path", { d: "M66.0594 79.5314V55.6339H61.8561V69.5975C61.8561 73.1119 59.51 76.2045 55.551 76.2045C51.7876 76.2045 49.6859 73.721 49.6859 69.8318V55.6339H45.4826V70.3941C45.4826 76.1108 49.0017 80 54.5735 80C58.728 80 61.1229 77.8914 62.0516 75.9702V79.5314H66.0594Z", fill: "#1D329D" }),
    React__default.createElement("path", { d: "M102.659 55.2121C98.6509 55.2121 95.7672 57.1802 94.301 59.9448C92.7858 56.9459 89.8043 55.2121 86.1386 55.2121C82.2286 55.2121 79.7359 57.0396 78.5629 59.2419V55.6339H74.555V79.5314H78.7584V65.5677C78.7584 61.9597 81.2999 58.9608 85.2589 58.9608C88.778 58.9608 91.1729 61.538 91.1729 65.5209V79.5314H95.4251V64.7243C95.7672 61.4911 98.0644 58.9608 101.681 58.9608C105.445 58.9608 107.742 61.538 107.742 65.5209V79.5314H111.945V64.9586C111.945 59.1482 108.182 55.2121 102.659 55.2121Z", fill: "#1D329D" }),
    React__default.createElement("path", { d: "M142.276 69.129V66.9266C142.276 59.8511 137.975 55.2121 130.839 55.2121C123.752 55.2121 118.571 59.8042 118.571 67.5826C118.571 75.3611 123.801 80 130.937 80C136.704 80 141.005 76.7668 142.032 72.4559L137.828 72.2216C136.998 74.8925 134.505 76.4857 130.839 76.4857C126.44 76.4857 123.263 73.721 123.019 69.129H142.276ZM130.79 58.7265C135.531 58.7265 137.975 61.6785 138.073 65.8489H123.019C123.312 61.21 126.489 58.7265 130.79 58.7265Z", fill: "#1D329D" }),
    React__default.createElement("path", { d: "M151.261 44.3411C149.745 44.3411 148.475 45.5125 148.475 47.012C148.475 48.4646 149.697 49.636 151.261 49.636C152.776 49.636 154.047 48.4646 154.047 47.012C154.047 45.5125 152.776 44.3411 151.261 44.3411ZM153.313 79.5314V55.6339H149.11V79.5314H153.313Z", fill: "#1D329D" })), 'Home');

var _a, _b, _c;
var breakpoints = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});
var mumeiTheme = createTheme({
    palette: {
        primary: {
            main: '#3650a1',
        },
        secondary: {
            main: '#1692DF'
        },
        info: {
            main: '#A5A5A5'
        },
        textColor: {
            primary: '#3650A1',
            secondary: '#1692DF',
            body1: '#3F3F3F',
            body2: '#6D6D6D',
            white: '#FFFFFF',
            gray: '#777777',
            darkBlue: '#1D329D',
            lightGray: '#8B90AB',
            black: '#000000',
        },
        chipBg: {
            pending: '#FFEDCA',
            resolved: '#ACEDC6',
            new: '#DDDBF3',
        },
        chipText: {
            pending: '#9A7226',
            resolved: '#19753E',
            new: '#47428B',
        },
    },
    typography: {
        fontFamily: [
            'Sailec-Regular',
            'Sailec-Light',
            'Sailec-Medium',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),
        h1: (_a = {
                fontSize: '50px',
                lineHeight: '62.5px'
            },
            _a[breakpoints.breakpoints.down('md')] = {
                fontSize: '40px',
            },
            _a),
        h2: {
            fontSize: '40px',
            lineHeight: '50px'
        },
        h3: {
            fontSize: '30px',
            lineHeight: '37.5px'
        },
        h4: (_b = {
                fontSize: '22px',
                lineHeight: '32px'
            },
            _b[breakpoints.breakpoints.down('md')] = {
                fontSize: '18px',
            },
            _b),
        h5: (_c = {
                fontSize: '18px',
                lineHeight: '32px'
            },
            _c[breakpoints.breakpoints.down('md')] = {
                fontSize: '18px',
            },
            _c),
        body1: {
            fontSize: '18px',
            color: '#3F3F3F'
        },
        body2: {
            fontSize: '16px',
            color: '#6D6D6D'
        }
    },
});
var mumeiContainerStyle = {
    background: '#ffffff',
    backgroundBlendMode: 'normal',
    boxShadow: '0px 4px 20px rgba(186, 198, 255, 0.3)',
    borderRadius: '16px'
};

var StyledButton$1 = styled(Button)(function (_a) { return ({
    ':hover': {
        boxShadow: 'none',
    },
    borderRadius: 45,
    textTransform: 'none',
    boxShadow: 'none',
    padding: '10px 22px',
    fontFamily: 'Sailec-Medium',
}); });
var MainButton = function (_a) {
    var color = _a.color, title = _a.title, onClick = _a.onClick;
    return (React__default.createElement(ThemeProvider, { theme: mumeiTheme },
        React__default.createElement(StyledButton$1, { color: color, onClick: onClick }, title)));
};

var StyledButton = styled(Button)(function () { return ({
    ':hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        boxShadow: 'none',
    },
    backgroundColor: 'white',
    borderRadius: 45,
    textTransform: 'none',
    boxShadow: 'none',
    padding: '10px 22px',
    fontFamily: 'Sailec-Medium',
}); });
var WhiteButton = function (_a) {
    var color = _a.color, title = _a.title, onClick = _a.onClick;
    return (React__default.createElement(ThemeProvider$1, { theme: mumeiTheme },
        React__default.createElement(StyledButton, { color: color, onClick: onClick }, title)));
};

var Direction;
(function (Direction) {
    Direction[Direction["ASCENDING"] = 0] = "ASCENDING";
    Direction[Direction["DECENDING"] = 1] = "DECENDING";
})(Direction || (Direction = {}));
var Status;
(function (Status) {
    Status[Status["RESOLVED"] = 0] = "RESOLVED";
    Status[Status["PENDING"] = 1] = "PENDING";
    Status[Status["NEW"] = 2] = "NEW";
})(Status || (Status = {}));
var ModalType;
(function (ModalType) {
    ModalType["SUCCESS"] = "SUCCESS";
    ModalType["ERROR"] = "ERROR";
    ModalType["WARNING"] = "WARNING";
})(ModalType || (ModalType = {}));
var LanguageTypes;
(function (LanguageTypes) {
    LanguageTypes["EST"] = "EST";
    LanguageTypes["ENG"] = "ENG";
})(LanguageTypes || (LanguageTypes = {}));

var dropDownOptions = [
    {
        label: "Corruption",
        value: 0,
    },
    {
        label: "Financial Misconduct",
        value: 1,
    },
    {
        label: "Sexual Misconduct",
        value: 2,
    },
    {
        label: "Other",
        value: 3,
    },
];

var CustomChip = function (_a) {
    var label = _a.label;
    var colorText = 'chipText.' + label.toString().toLowerCase();
    var colorBg = 'chipBg.' + label.toString().toLowerCase();
    return (React__default.createElement(Chip, { label: label, size: 'small', sx: {
            color: colorText,
            backgroundColor: colorBg,
            borderRadius: 1,
            marginRight: 2,
            marginLeft: 2,
        } }));
};

var ReportInfo = function (_a) {
    var _b;
    var data = _a.data;
    return (React__default.createElement(Grid, { container: true, rowSpacing: 2, columnSpacing: { xs: 1, sm: 2, md: 3 } },
        React__default.createElement(Grid, { item: true, xs: 12, sm: 6, md: 6 },
            React__default.createElement(Typography, { variant: 'h5', color: "textColor.primary", fontFamily: "Sailec-Medium", pb: 3 }, "Basic Information"),
            React__default.createElement(Grid, { container: true, rowSpacing: 1.5 },
                React__default.createElement(Grid, { item: true, xs: 6, sm: 6, md: 6 },
                    React__default.createElement(Typography, { variant: 'body2' }, "Report Type")),
                React__default.createElement(Grid, { item: true, xs: 6, sm: 6, md: 6 },
                    React__default.createElement(Typography, { variant: 'body2' },
                        ": ",
                        data ? (_b = dropDownOptions.find(function (o) { return o.value == data.reportType; })) === null || _b === void 0 ? void 0 : _b.label : dropDownOptions[3].label)),
                React__default.createElement(Grid, { item: true, xs: 6, sm: 6, md: 6 },
                    React__default.createElement(Typography, { variant: 'body2' }, "Date of Incident")),
                React__default.createElement(Grid, { item: true, xs: 6, sm: 6, md: 6 },
                    React__default.createElement(Typography, { variant: 'body2' },
                        ": ",
                        data && new Date(data.dateOfIncident).toDateString())),
                React__default.createElement(Grid, { item: true, xs: 6, sm: 6, md: 6 },
                    React__default.createElement(Typography, { variant: 'body2' }, "Location of Incident")),
                React__default.createElement(Grid, { item: true, xs: 6, sm: 6, md: 6 },
                    React__default.createElement(Typography, { variant: 'body2' },
                        ": ", data === null || data === void 0 ? void 0 :
                        data.location)))),
        React__default.createElement(Grid, { item: true, xs: 12, sm: 6, md: 6 },
            React__default.createElement(Typography, { variant: 'h5', color: "textColor.primary", fontFamily: "Sailec-Medium", pb: 3 }, "Individuals Evolved"),
            React__default.createElement(Typography, { variant: 'body2', pb: 3 }, data === null || data === void 0 ? void 0 : data.individualsEvolved)),
        React__default.createElement(Grid, { item: true, xs: 12, sm: 12, md: 12, height: 250 },
            React__default.createElement(Typography, { variant: 'h5', color: "textColor.primary", fontFamily: "Sailec-Medium", pb: 3 }, "Summary of Incident"),
            React__default.createElement(Typography, { variant: 'body2' }, data === null || data === void 0 ? void 0 : data.summary)),
        React__default.createElement(Grid, { item: true, xs: 12, sm: 12, md: 12, height: 250 },
            React__default.createElement(Typography, { variant: 'h5', color: "textColor.primary", fontFamily: "Sailec-Medium", pb: 3 }, "Attachments"))));
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var FormInputDate = function (_a) {
    var name = _a.name, control = _a.control, label = _a.label, defaultDate = _a.defaultDate, required = _a.required;
    var _b = React__default.useState(new Date()), value = _b[0], setValue = _b[1];
    useEffect(function () {
        if (defaultDate) {
            setValue(defaultDate);
        }
    }, []);
    var handleChange = function (newValue, field) {
        setValue(newValue);
        field.onChange(newValue);
    };
    return (React__default.createElement(LocalizationProvider, { dateAdapter: DateFnsUtils },
        React__default.createElement(Controller, { name: name, control: control, defaultValue: defaultDate, render: function (_a) {
                var field = _a.field, error = _a.fieldState.error;
                return (React__default.createElement(DesktopDatePicker, { label: label, inputFormat: "dd/MM/yyyy", value: value, onChange: function (date) { return handleChange(date, field); }, onOpen: function () { return field.onChange(value); }, renderInput: function (field) { return React__default.createElement(TextField, __assign({ helperText: error ? error.message : " ", size: "small", sx: { input: { color: 'black' }, label: { fontSize: '16px' } } }, field)); } }));
            }, rules: {
                required: {
                    value: required,
                    message: label + ' required'
                },
            } })));
};

var FormInputDropdown = function (_a) {
    var name = _a.name, control = _a.control, label = _a.label, setValue = _a.setValue, defaultValue = _a.defaultValue, required = _a.required;
    return (React__default.createElement(Controller, { name: name, control: control, render: function (_a) {
            var onChange = _a.field.onChange, error = _a.fieldState.error;
            return (React__default.createElement(TextField, { select: true, helperText: error ? error.message : " ", size: "small", error: !!error, onChange: onChange, defaultValue: defaultValue, fullWidth: true, label: label, variant: "outlined", sx: { input: { color: 'black' }, label: { fontSize: '16px' } } }, setValue.map(function (option) { return (React__default.createElement(MenuItem, { key: option.value, value: option.value }, option.label)); })));
        }, rules: {
            required: {
                value: required,
                message: label + ' required'
            },
        } }));
};

var FormInputText = function (_a) {
    var name = _a.name, control = _a.control, label = _a.label, multiline = _a.multiline, rows = _a.rows, defaultValue = _a.defaultValue, required = _a.required;
    return (React__default.createElement(Controller, { name: name, control: control, render: function (_a) {
            var onChange = _a.field.onChange, error = _a.fieldState.error;
            return (React__default.createElement(TextField, { helperText: error ? error.message : " ", size: "small", error: !!error, onChange: onChange, defaultValue: defaultValue, fullWidth: true, label: label, variant: "outlined", multiline: multiline, rows: rows, sx: { input: { color: 'black' }, label: { fontSize: '16px' } } }));
        }, rules: {
            required: {
                value: required,
                message: label + ' required'
            },
        } }));
};

var style$1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    borderRadius: 2,
    p: 3,
    boxShadow: '0px 4px 20px rgba(186, 198, 255, 0.9)',
};
var CustomModal = function (_a) {
    var open = _a.open, onClose = _a.onClose, title = _a.title, description = _a.description, type = _a.type;
    var icons = {
        SUCCESS: CheckIcon,
        ERROR: ErrorOutlineRoundedIcon,
        WARNING: ErrorOutlineRoundedIcon,
    };
    var colors = {
        SUCCESS: 'green',
        ERROR: '#E8619F',
        WARNING: 'orange',
    };
    var IconComponent = icons[type];
    return (React.createElement(Modal, { open: open, onClose: onClose, BackdropProps: { style: { backgroundColor: 'rgba(255, 255, 255, 0.6)' } } },
        React.createElement(Box, { sx: style$1 },
            React.createElement("div", null,
                React.createElement(IconButton, { color: "default", sx: { padding: 0, float: 'right' }, onClick: onClose },
                    React.createElement(ClearIcon, { fontSize: 'small' }))),
            React.createElement(IconComponent, { color: 'success', sx: { color: colors[type], fontSize: 100, marginLeft: '38%' } }),
            React.createElement(Typography, { id: "modal-modal-title", variant: "h6", fontFamily: 'Sailec-Medium', textAlign: 'center', color: 'textColor.primary' }, title),
            React.createElement(Typography, { id: "modal-modal-description", sx: { mt: 2, textAlign: 'center', pb: 3 } }, description))));
};

var style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    borderRadius: 2,
    p: 3,
    boxShadow: '0px 4px 20px rgba(186, 198, 255, 0.9)',
};
var ReportModal = function (_a) {
    var open = _a.open, onClose = _a.onClose; _a.onNavigate;
    var _b = React.useState(); _b[0]; var setFormData = _b[1];
    var methods = useForm();
    var handleSubmit = methods.handleSubmit, control = methods.control;
    var onSubmit = function (data) {
        setFormData(data);
    };
    return (React.createElement(Modal, { open: open, onClose: onClose, "aria-labelledby": "modal-modal-title", "aria-describedby": "modal-modal-description", BackdropProps: { style: { backgroundColor: 'rgba(255, 255, 255, 0.6)' } } },
        React.createElement(Box, { sx: style },
            React.createElement("div", null,
                React.createElement(IconButton, { color: "default", sx: { padding: 0, float: 'right' }, onClick: onClose },
                    React.createElement(ClearIcon, { fontSize: 'small' }))),
            React.createElement(KeyIcon, { color: 'secondary', sx: { fontSize: 100, marginLeft: '38%' } }),
            React.createElement(Typography, { id: "modal-modal-title", variant: "h6", fontFamily: 'Sailec-Medium', textAlign: 'center', color: 'text.primary', mb: 3 }, "Please enter the report key"),
            React.createElement(FormInputText, { name: "key", required: true, control: control, label: "Report key" }),
            React.createElement(Stack, { direction: "row", justifyContent: "flex-end", alignItems: "center", spacing: 2 },
                React.createElement(MainButton, { variant: 'contained', color: "secondary", onClick: handleSubmit(onSubmit) }, "Submit")))));
};

export { CustomChip, CustomModal, Direction, FormInputDate, FormInputDropdown, FormInputText, LanguageTypes, MainButton, ModalType, MumeiLogo, ReportInfo, ReportModal, Status, WhiteButton, dropDownOptions, mumeiContainerStyle, mumeiTheme };
