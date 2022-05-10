export interface FormInputProps {
    name: string;
    control: any;
    label: string;
    defaultValue?: string | number | Date;
    defaultDate?: Date;
    setValue?: any;
    multiline?: boolean;
    required: boolean;
    rows?: number;
}
