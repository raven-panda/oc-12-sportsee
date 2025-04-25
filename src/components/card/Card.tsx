import styles from "../components.module.css";
import { ReactNode } from "react";

interface ChartCardProps {
  variant?: "neutral" | "dark" | "red";
  className?: string;
  children?: ReactNode;
}

export default function Card({
  variant = "neutral",
  className,
  children,
}: ChartCardProps) {
  return (
    <article
      className={
        className +
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
