import { useEffect, useState } from "react";
import UserService from "@/api/service/UserService.ts";
import {
  ResponseUserMainDataType,
  ResponseUserPerformanceType,
  UserActivitySessionType,
  UserAverageSessionType,
} from "@/definition/UserDefinitions.ts";
import { usePageError } from "@/hook/PageErrorHooks.tsx";
import PageErrorBuilder from "@/utils/PageErrorBuilder.ts";

/**
 * Manage data retrieval from service needed for the dashboard
 */
export function useUserData() {
  const { error, setError } = usePageError();

  const [userId, setUserId] = useState<number | undefined>();
  const [mainData, setMainData] = useState<
    ResponseUserMainDataType | undefined
  >();
  const [activities, setActivities] = useState<
    UserActivitySessionType[] | undefined
  >();
  const [averageSessions, setAverageSessions] = useState<
    UserAverageSessionType[] | undefined
  >();
  const [performances, setPerformances] = useState<
    ResponseUserPerformanceType | undefined
  >();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      return;
    }

    UserService.getAllDataByUserId(userId)
      .then((res) => {
        setMainData(res.data.mainData?.data);
        setActivities(res.data.activity?.data.sessions);
        setAverageSessions(res.data.averageSessions?.data.sessions);
        setPerformances(res.data.performance?.data);

        if (res.error) {
          setError(PageErrorBuilder(res.error, "Utilisateur").message);
        }
      })
      .finally(() => setIsLoading(false));
  }, [setError, userId]);

  return {
    mainData,
    activities,
    averageSessions,
    performances,
    error,
    isLoading,
    setUserId,
  };
}
