export type Query = {
    sortParams?: SortParam[];
    offset?: number;
    limit?: number;
    fields?: string[];
    page?: number;
};
export type SortParamsStructure = SortParam[];
export type SortParam = {
    text?: string;
    type?: string;
    field: string | null;
    direction: string | null;
    clientOnly?: boolean;
    allowClientChoice?: boolean;
};
