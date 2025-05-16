import { IUserService } from "@/api/service/UserService.ts";
import UserMockStore from "@/__mocks__/user/UserMockData.ts";
import { ApiResponseError } from "@/api/ApiAction.ts";

const UserServiceMock: IUserService = {
  async getAllDataByUserId(userId: number) {
    const mainData = UserMockStore.mainData.find((data) => data.id === userId),
      activity = UserMockStore.activity.find((data) => data.userId === userId),
      averageSessions = UserMockStore.averageSessions.find(
        (data) => data.userId === userId,
      ),
      performance = UserMockStore.performance.find(
        (data) => data.userId === userId,
      );

    const error: ApiResponseError | undefined = !(
      mainData ||
      activity ||
      averageSessions ||
      performance
    )
      ? {
          status: 404,
        }
      : undefined;

    return {
      body: {
        mainData,
        activity,
        averageSessions,
        performance,
      },
      error,
    };
  },
};

export default UserServiceMock;
