//
// This file contains types for formatted data for charts
// See DataToChartDataFormatter.tsx for use cases
//

export interface UserActivitySessionTypeFormatted {
  name: number;
  weight: number;
  cal: number;
}

export interface UserScoreFormatted {
  chartData: {
    name: string;
    value: number;
    fill: string;
  }[];
  userScore: number;
}

export interface ResponseUserPerformanceTypeFormatted {
  name: string | null;
  value: number;
}
