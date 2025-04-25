import styles from "../components.module.css";
import { ReactNode } from "react";

interface DashboardCardProps {
  variant?: "neutral"|"dark"|"red";
  children: ReactNode;
}

export default function DashboardCard({
  variant = "neutral",
  children
}: DashboardCardProps) {
  return (
    <article className={variant === "red" ? styles.cardRed : variant === "dark" ? styles.cardDark : styles.cardNeutral}>
      {children}
    </article>
  );
}
