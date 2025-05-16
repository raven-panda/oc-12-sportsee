import {
  API_USER_ACTIVITY,
  API_USER_PERFORMANCE,
  API_USER_MAIN_DATA,
  API_USER_AVERAGE_SESSIONS,
} from "@/api/ApiEnpoints.ts";
import { apiGet, ApiResponse } from "@/api/ApiAction.ts";
import {
  ResponseUserActivityType,
  ResponseUserAverageSessionsType,
  ResponseUserMainDataType,
  ResponseUserPerformanceType,
} from "@/definition/UserDefinitions.ts";
import UserServiceMock from "@/__mocks__/user/UserServiceMock.ts";

const isFixtureEnabled = import.meta.env.VITE_FIXTURE_ENABLED === "true";

export interface IUserService {
  getAllDataByUserId(
    userId: number,
  ): Promise<
    ApiResponse<{
      mainData?: ResponseUserMainDataType;
      activity?: ResponseUserActivityType;
      averageSessions?: ResponseUserAverageSessionsType;
      performance?: ResponseUserPerformanceType;
    }>
  >;
}

/**
 * Back end data retrieval logic for User resource
 */
const UserService: IUserService = isFixtureEnabled
  ? UserServiceMock
  : {
      async getAllDataByUserId(userId: number) {
        const [mainData, activity, averageSessions, performance] =
          await Promise.all([
            apiGet<ResponseUserMainDataType>(
              API_USER_MAIN_DATA.replace(":userId", userId?.toString()),
            ),
            apiGet<ResponseUserActivityType>(
              API_USER_ACTIVITY.replace(":userId", userId?.toString()),
            ),
            apiGet<ResponseUserAverageSessionsType>(
              API_USER_AVERAGE_SESSIONS.replace(":userId", userId?.toString()),
            ),
            apiGet<ResponseUserPerformanceType>(
              API_USER_PERFORMANCE.replace(":userId", userId?.toString()),
            ),
          ]);

        return {
          body: {
            mainData: mainData.body?.data,
            activity: activity.body?.data,
            averageSessions: averageSessions.body?.data,
            performance: performance.body?.data,
          },
          error:
            mainData.error ??
            activity.error ??
            averageSessions.error ??
            performance.error,
        };
      },
    };

export default UserService;
