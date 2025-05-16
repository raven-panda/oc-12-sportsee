import { Link, Outlet } from "react-router-dom";
import AppLogo from "../AppLogo.js";
import styles from "../components.module.css";
import { usePageError } from "@/hook/PageErrorHooks.ts";
import ErrorPage from "@/views/error/ErrorPage.tsx";

export default function MainLayout() {
  const { error } = usePageError();
  console.log({ error });

  return (
    <div className={styles.layout}>
      <header>
        <nav className={styles.layoutNavigation}>
          <AppLogo />
          <Link to="#">Accueil</Link>
          <Link to="#">Profil</Link>
          <Link to="#">Réglage</Link>
          <Link to="#">Communauté</Link>
        </nav>
      </header>
      {error ? <ErrorPage error={error} /> : <Outlet />}
    </div>
  );
}
