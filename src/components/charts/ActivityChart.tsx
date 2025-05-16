import { UserActivitySessionType } from "@/definition/UserDefinitions.ts";
import Card from "@/components/card/Card.tsx";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "../components.module.css";

export default function ActivityCard({
  activities,
}: {
  activities: UserActivitySessionType[] | undefined;
}) {
  const convertActivitiesToChartData = () => {
    return (
      activities?.map((act, i) => ({
        name: i + 1,
        weight: act.kilogram,
        cal: act.calories,
      })) ?? []
    );
  };

  return (
    <Card variant={"neutral"} className={styles.activityCard}>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <BarChart data={convertActivitiesToChartData()}>
          <Bar
            dataKey="weight"
            radius={[7, 7, 0, 0]}
            barSize={7}
            fill="#282D30"
            name="Poids (kg)"
          />
          <Bar
            dataKey="cal"
            radius={[7, 7, 0, 0]}
            barSize={7}
            fill="#FF0000"
            name="Calories brûlées (kCal)"
          />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="name"
            tickMargin={16}
            max={10}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tickMargin={30}
            orientation={"right"}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            content={<CustomLegend title={"Activité quotidienne"} />}
            verticalAlign="top"
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.activityCardTooltip}>
        <p>{payload[0].value} kg</p>
        <p>{payload[1].value} kCal</p>
      </div>
    );
  }

  return null;
};

const CustomLegend = ({ payload, title }: any) => {
  if (payload && payload.length) {
    return (
      <div className={styles.activityCardLegend}>
        <h3>{title}</h3>
        <section className={styles.activityCardLegendColors}>
          {payload.map((obj: any) => (
            <article key={obj.value}>
              <span style={{ backgroundColor: obj.color }}></span>
              <p>{obj.value}</p>
            </article>
          ))}
        </section>
      </div>
    );
  }

  return null;
};
