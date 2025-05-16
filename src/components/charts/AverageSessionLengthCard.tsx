import { UserAverageSessionType } from "@/definition/UserDefinitions.ts";
import Card from "@/components/card/Card.tsx";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import styles from "../components.module.css";

export default function AverageSessionLengthCard({
  sessions,
}: {
  sessions: UserAverageSessionType[] | undefined;
}) {
  return (
    <Card variant={"red"}>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <LineChart data={sessions ?? []}>
          <XAxis
            dataKey="day"
            tickMargin={16}
            max={7}
            tickLine={false}
            axisLine={false}
            stroke={"#ffffff88"}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" />
          <Legend content={<CustomLegend />} verticalAlign="top" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: "#FFFFFF", padding: 12 }}>
        <p style={{ margin: 0 }}>{payload[0].value} min</p>
      </div>
    );
  }

  return null;
};

function CustomLegend() {
  return <h3 className={styles.cardTitle}>Durée moyenne des sessions</h3>;
}
