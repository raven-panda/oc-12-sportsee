import { useEffect, useState } from "react";
import UserService from "@/service/UserService.ts";
import {
  ResponseUserMainDataType,
  ResponseUserPerformanceType,
  UserActivitySessionType,
  UserAverageSessionType
} from "@/definition/UserDefinitions.ts";

export function useUserData(userId: number) {
  const [mainData, setMainData] = useState<ResponseUserMainDataType | undefined>();
  const [activities, setActivities] = useState<UserActivitySessionType[] | undefined>();
  const [averageSessions, setAverageSessions] = useState<UserAverageSessionType[] | undefined>();
  const [performances, setPerformances] = useState<ResponseUserPerformanceType | undefined>();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setIsLoading(false);
      return;
    }

    UserService.getAllDataByUserId(userId)
      .then(res => {
        setMainData(res.data.mainData?.data);
        setActivities(res.data.activity?.data.sessions);
        setAverageSessions(res.data.averageSessions?.data.sessions);
        setPerformances(res.data.performance?.data);

        setError(res.error);
      })
      .finally(() => setIsLoading(false));
  }, [userId]);

  return { mainData, activities, averageSessions, performances, error, isLoading };
}
