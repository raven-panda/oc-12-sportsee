import styles from "../components.module.css";
import { ReactNode } from "react";

interface ChartCardProps {
  variant?: "neutral" | "dark" | "red";
  children?: ReactNode;
}

export default function ChartCard({
  variant = "neutral",
  children,
}: ChartCardProps) {
  return (
    <article
      className={
        styles.chartCard +
        " " +
        (variant === "red"
          ? styles.cardRed
          : variant === "dark"
            ? styles.cardDark
            : styles.cardNeutral)
      }
    >
      {children}
    </article>
  );
}
