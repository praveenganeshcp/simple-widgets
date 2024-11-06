export interface SwColumnDef {
  fieldName: string;
  label: string;
  renderTemplate: boolean;
}

export interface SwPagination {
  totalRows: number;
  countPerPage: number;
  currentPage: number;
}
