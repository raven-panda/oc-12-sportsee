import styles from "../components.module.css";
import { ReactNode, RefObject } from "react";

interface ChartCardProps {
  variant?: "neutral" | "dark" | "red";
  className?: string;
  children?: ReactNode;
  ref?: RefObject<HTMLElement | null>;
}

export default function Card({
  variant = "neutral",
  className,
  children,
  ref,
}: ChartCardProps) {
  return (
    <article
      ref={ref}
      className={
        (className ? className + " " : "") +
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
