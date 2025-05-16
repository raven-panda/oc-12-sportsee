import styles from "../components.module.css";
import { ReactNode, RefObject } from "react";

interface ChartCardProps {
  variant?: "neutral" | "dark" | "red";
  className?: string;
  children?: ReactNode;
  ref?: RefObject<HTMLElement | null>;
}

/**
 * @param variant {"neutral" | "dark" | "red"} Applies a different style for each variant
 * @param className {string} Additional CSS class to apply to the card
 * @param children {ReactNode}
 */
export default function Card({
  variant = "neutral",
  className,
  children,
}: ChartCardProps) {
  return (
    <article
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
