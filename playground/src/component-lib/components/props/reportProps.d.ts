import { Status } from "../constants";
export interface Report {
    id: string;
    companyId: number;
    summary: string;
    dateOfIncident: Date;
    dateSubmitted: Date;
    location: string;
    individualsEvolved: string;
    reportType: number;
    attachments: string;
    status: Status;
}
