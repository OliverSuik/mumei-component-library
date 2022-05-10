import { Direction } from "../constants";
export interface SortField {
    field: string | null;
    sortDirection: Direction.ASCENDING | Direction.DECENDING | null;
}
