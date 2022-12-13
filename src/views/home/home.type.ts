export interface DashboardBoxType {
  Payload: DashboardBoxContentType[];
}

export interface DashboardBoxContentType {
  Content: string;
  Description: string;
  DisplayText: string;
  EndDate: Date;
  ReportId: number;
  ReportName: string;
  ReportSummaryType: string;
  StartDate: Date;
}
