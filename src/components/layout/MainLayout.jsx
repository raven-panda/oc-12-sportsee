import { Link, Outlet } from "react-router-dom";
import AppLogo from "../AppLogo.jsx";
import styles from "../components.module.css";

export default function MainLayout() {
  return (
    <main>
      <nav className={styles.layoutNavigation}>
        <AppLogo />
        <Link to="#">Accueil</Link>
        <Link to="#">Profil</Link>
        <Link to="#">Réglage</Link>
        <Link to="#">Communauté</Link>
      </nav>
      <Outlet />
    </main>
  );
}
