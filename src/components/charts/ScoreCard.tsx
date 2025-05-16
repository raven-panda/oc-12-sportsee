import Card from "@/components/card/Card.tsx";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import styles from "@/components/components.module.css";
import { UserScoreFormatted } from "@/definition/ChartDefinitions.ts";

export default function ScoreCard({
  scoreData,
}: {
  scoreData: UserScoreFormatted | undefined;
}) {
  return (
    <Card variant={"neutral"}>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <RadialBarChart
          innerRadius="70%"
          outerRadius="100%"
          cx="50%"
          cy="50%"
          data={scoreData?.chartData ?? []}
          startAngle={90}
          endAngle={360 + 90}
        >
          <RadialBar dataKey="value" cornerRadius={"100%"} />
          <Legend content={<CustomLegend />} verticalAlign="top" />
        </RadialBarChart>
      </ResponsiveContainer>
      <p className={styles.userScore}>
        <strong>{scoreData ? scoreData.userScore * 100 : 0}%</strong>
        <br /> de votre objectif
      </p>
    </Card>
  );
}

function CustomLegend() {
  return <h3 className={styles.cardTitle}>Score</h3>;
}
