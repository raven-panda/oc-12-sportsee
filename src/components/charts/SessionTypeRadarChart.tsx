import { ResponseUserPerformanceType } from "@/definition/UserDefinitions.ts";
import Card from "@/components/card/Card.tsx";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, } from "recharts";
import styles from "@/components/components.module.css";

export default function SessionTypeRadarChart({
  performances,
}: {
  performances: ResponseUserPerformanceType | undefined;
}) {
  const getKindLabel = (kind: string) => {
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

  const performancesToChartData = () => {
    return performances
      ? performances.data.map((perf) => ({
          name: getKindLabel(performances.kind[perf.kind]),
          value: perf.value,
        }))
      : [];
  };

  function CustomTick({ payload, x, y, textAnchor }: any) {
    return (
      <text
        className={styles.radarTick}
        x={x}
        y={y}
        fontSize={"1em"}
        textAnchor={textAnchor}
        fill={"#FFFFFF"}
      >
        {payload.value}
      </text>
    );
  }

  return (
    <Card
      className={styles.sessionTypeRadarCard}
      variant={"dark"}
    >
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <RadarChart outerRadius={"70%"} data={performancesToChartData()}>
          {performances && <PolarGrid radialLines={false} />}
          <PolarAngleAxis
            tick={<CustomTick />}
            dataKey="name"
            stroke={"#FFFFFF"}
            tickLine={false}
            tickSize={0}
          />
          <Radar dataKey="value" fill="#FF0000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </Card>
  );
}
