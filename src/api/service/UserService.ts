import {
  API_USER_ACTIVITY,
  API_USER_PERFORMANCE,
  API_USER_MAIN_DATA,
  API_USER_AVERAGE_SESSIONS,
} from "@/api/ApiEnpoints.ts";
import { apiGet } from "@/api/ApiAction.ts";
import {
  ResponseUserActivityType,
  ResponseUserAverageSessionsType,
  ResponseUserMainDataType,
  ResponseUserPerformanceType,
} from "@/definition/UserDefinitions.ts";

/**
 * Back end data retrieval logic for User resource
 */
const UserService = {
  getAllDataByUserId: async (userId: number) => {
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
      data: {
        mainData: mainData.data,
        activity: activity.data,
        averageSessions: averageSessions.data,
        performance: performance.data,
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
