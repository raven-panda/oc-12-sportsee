import Card from "@/components/card/Card.tsx";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import styles from "@/components/components.module.css";
import { ResponseUserPerformanceTypeFormatted } from "@/definition/ChartDefinitions.ts";

export default function SessionTypeRadarChart({
  performances,
}: {
  performances: ResponseUserPerformanceTypeFormatted[] | undefined;
}) {
  return (
    <Card className={styles.sessionTypeRadarCard} variant={"dark"}>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <RadarChart outerRadius={"70%"} data={performances}>
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
