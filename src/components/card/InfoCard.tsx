import styles from "../components.module.css";
import { ReactNode } from "react";
import Card from "@/components/card/Card.tsx";

interface InfoCardProps {
  icon: ReactNode;
  name: string;
  amount: number|string;
  unit: string;
  variant: "red"|"blue"|"yellow"|"pink"
}

export default function InfoCard({
  icon,
  name,
  amount,
  unit,
  variant,
}: InfoCardProps) {
  return (
    <Card className={styles.infoCard}>
      <div className={styles.infoCardIcon + " " + styles[variant]}>
        {icon}
      </div>
      <div className={styles.infoCardDetails}>
        <p>{amount}{unit}</p>
        <p>{name}</p>
      </div>
    </Card>
  );
}
