import styles from "../components.module.css";
import { ReactNode } from "react";
import Card from "@/components/card/Card.tsx";

interface InfoCardProps {
  icon: ReactNode;
  name: string;
  amount: number | string;
  unit: string;
  variant: "red" | "blue" | "yellow" | "pink";
}

/**
 * A smaller card to show amount informations that extends Card component
 * @param icon {ReactNode} The icon component to show along the data
 * @param name {string} Name of the data
 * @param amount {number | string} Amount to show along data
 * @param unit {string} The unit of the amount
 * @param variant {"red" | "blue" | "yellow" | "pink"} Applies different styles for each to the icon
 */
export default function InfoCard({
  icon,
  name,
  amount,
  unit,
  variant,
}: InfoCardProps) {
  return (
    <Card className={styles.infoCard}>
      <div className={styles.infoCardIcon + " " + styles[variant]}>{icon}</div>
      <div className={styles.infoCardDetails}>
        <p>
          {amount}
          {unit}
        </p>
        <p>{name}</p>
      </div>
    </Card>
  );
}
