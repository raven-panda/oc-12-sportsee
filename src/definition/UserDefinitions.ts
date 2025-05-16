//
// This file contains types for back end data response
//

export interface ResponseUserMainDataType {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  todayScore?: number;
  score?: number;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
}

export interface ResponseUserActivityType {
  userId: number;
  sessions: UserActivitySessionType[];
}

export interface UserActivitySessionType {
  day: string;
  kilogram: number;
  calories: number;
}

export interface ResponseUserAverageSessionsType {
  userId: number;
  sessions: UserAverageSessionType[];
}

export interface UserAverageSessionType {
  day: number;
  sessionLength: number;
}

export interface ResponseUserPerformanceType {
  userId: number;
  kind: Record<number, string>;
  data: {
    value: number;
    kind: number;
  }[];
}
