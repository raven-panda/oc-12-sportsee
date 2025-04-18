import styles from "./components.module.css";

export default function AppLogo() {
  return (
    <div className={styles.appLogo}>
      <img src="/sportsee-logo.svg" alt="SportSee logo" />
      <p>SportSee</p>
    </div>
  );
}
