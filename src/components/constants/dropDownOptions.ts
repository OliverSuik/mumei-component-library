export interface dropDownProps {
    label: string;
    value: number;
}

export const dropDownOptions: dropDownProps[] = [
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