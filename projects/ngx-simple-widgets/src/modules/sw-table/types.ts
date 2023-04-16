export interface SwColumnDef {
    fieldName: string;
    label: string;
    renderTemplate: boolean;
    flex: string;
}
  
export interface SwPagination {
    totalRows: number;
    countPerPage: number;
    currentPage: number;
}