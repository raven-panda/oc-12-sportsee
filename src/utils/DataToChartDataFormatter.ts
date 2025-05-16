import {
  ResponseUserPerformanceType,
  UserActivitySessionType,
} from "@/definition/UserDefinitions.ts";
import {
  ResponseUserPerformanceTypeFormatted,
  UserActivitySessionTypeFormatted,
  UserScoreFormatted,
} from "@/definition/ChartDefinitions.ts";

/**
 * This utility class formats different type of data used in the application charts
 */
export default class DataToChartDataFormatter {
  public static formatActivities(
    activities: UserActivitySessionType[] | undefined,
  ): UserActivitySessionTypeFormatted[] | undefined {
    return (
      activities?.map((act, i) => ({
        name: i + 1,
        weight: act.kilogram,
        cal: act.calories,
      })) ?? []
    );
  }

  public static formatScore(score: number | undefined): UserScoreFormatted {
    return {
      chartData: [
        {
          name: "max",
          value: 1 - Math.max(0, Math.min(1, score ?? 0)),
          fill: "transparent",
        },
        {
          name: "score",
          value: Math.max(0, Math.min(1, score ?? 0)),
          fill: "#FF0000",
        },
      ],
      userScore: score ?? 0,
    };
  }

  public static formatPerformances(
    performances: ResponseUserPerformanceType | undefined,
  ): ResponseUserPerformanceTypeFormatted[] | undefined {
    return performances
      ? performances.data.map((perf) => ({
          name: DataToChartDataFormatter.getKindLabel(
            performances.kind[perf.kind],
          ),
          value: perf.value,
        }))
      : [];
  }

  private static getKindLabel = (kind: string) => {
    switch (kind) {
      case "intensity":
        return "Intensité";
      case "cardio":
        return "Cardio";
      case "endurance":
        return "Endurance";
      case "energy":
        return "Énergie";
      case "speed":
        return "Vitesse";
      case "strength":
        return "Force";
      default:
        return null;
    }
  };
}
