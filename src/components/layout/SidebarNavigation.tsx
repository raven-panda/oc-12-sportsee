import { JSX } from "react";
import styles from "../components.module.css";
import MeditationIcon from "../icon/MeditationIcon";
import SwimIcon from "../icon/SwimIcon";
import DumbbellIcon from "../icon/DumbbellIcon";
import BicycleIcon from "../icon/BicycleIcon";

export default function SidebarNavigation({ variant }: { variant: "dashboard" }): JSX.Element {
  const getNavigationForGivenVariant = (): JSX.Element => {
    switch (variant) {
      case "dashboard":
        return (
          <>
            <button><MeditationIcon /></button>
            <button><SwimIcon /></button>
            <button><BicycleIcon /></button>
            <button><DumbbellIcon /></button>
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <nav className={styles.sidebarNavigation}>
      {getNavigationForGivenVariant()}
    </nav>
  );
}
