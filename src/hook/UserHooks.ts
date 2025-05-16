import { useEffect, useState } from "react";
import UserService from "@/api/service/UserService.ts";
import {
  ResponseUserMainDataType,
  UserAverageSessionType,
} from "@/definition/UserDefinitions.ts";
import { usePageError } from "@/hook/PageErrorHooks.ts";
import PageErrorBuilder from "@/utils/PageErrorBuilder.ts";
import {
  ResponseUserPerformanceTypeFormatted,
  UserActivitySessionTypeFormatted,
  UserScoreFormatted,
} from "@/definition/ChartDefinitions.ts";
import DataToChartDataFormatter from "@/utils/DataToChartDataFormatter.ts";

/**
 * Manage data retrieval from service needed for the dashboard
 */
export function useUserData() {
  const { error, setError } = usePageError();

  const [userId, setUserId] = useState<number | undefined>();
  const [mainData, setMainData] = useState<
    ResponseUserMainDataType | undefined
  >();
  const [scoreData, setScoreData] = useState<UserScoreFormatted | undefined>();
  const [activities, setActivities] = useState<
    UserActivitySessionTypeFormatted[] | undefined
  >();
  const [averageSessions, setAverageSessions] = useState<
    UserAverageSessionType[] | undefined
  >();
  const [performances, setPerformances] = useState<
    ResponseUserPerformanceTypeFormatted[] | undefined
  >();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      return;
    }

    UserService.getAllDataByUserId(userId)
      .then((res) => {
        setMainData(res.data.mainData?.data);
        setScoreData(
          DataToChartDataFormatter.formatScore(
            res.data.mainData?.data.todayScore ?? res.data.mainData?.data.score,
          ),
        );
        setActivities(
          DataToChartDataFormatter.formatActivities(
            res.data.activity?.data.sessions,
          ),
        );
        setAverageSessions(res.data.averageSessions?.data.sessions);
        setPerformances(
          DataToChartDataFormatter.formatPerformances(
            res.data.performance?.data,
          ),
        );

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
    scoreData,
    error,
    isLoading,
    setUserId,
  };
}
