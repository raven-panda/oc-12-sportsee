import Card from "@/components/card/Card.tsx";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import styles from "@/components/components.module.css";

export default function ScoreCard({
  score = 0,
}: {
  score: number | undefined;
}) {
  const radialChartData = [
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
  ];

  // TODO : finish background white
  return (
    <Card variant={"neutral"}>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <RadialBarChart
          innerRadius="70%"
          outerRadius="100%"
          cx="50%"
          cy="50%"
          data={radialChartData}
          startAngle={90}
          endAngle={360 + 90}
        >
          <RadialBar dataKey="value" cornerRadius={"100%"} />
          <Legend content={<CustomLegend />} verticalAlign="top" />
        </RadialBarChart>
      </ResponsiveContainer>
      <p className={styles.userScore}>
        <strong>{score * 100}%</strong>
        <br /> de votre objectif
      </p>
    </Card>
  );
}

function CustomLegend() {
  return <h3 className={styles.cardTitle}>Score</h3>;
}
