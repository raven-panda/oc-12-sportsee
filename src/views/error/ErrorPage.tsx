import "./ErrorPage.css";
import { Link, useNavigate } from "react-router-dom";

interface ErrorPageProps {
  error: string;
}

export default function ErrorPage({ error }: ErrorPageProps) {
  const navigate = useNavigate();

  return (
    <section className="error-page-container">
      <h1>Une erreur est survenue</h1>
      <p>{error}</p>
      <Link to={"#"} onClick={() => navigate(-1)}>
        Revenir en arrière
      </Link>
    </section>
  );
}
