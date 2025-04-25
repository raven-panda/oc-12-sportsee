import './dashboard.css';
import SidebarNavigation from "../components/layout/SidebarNavigation";
import DashboardCard from "../components/card/DashboardCard";

export default function DashboardPage() {
  return (
    <main className="dashboard">
      <SidebarNavigation variant={"dashboard"} />
      <section className="dashboard-main-section">
        <h1>Bonjour, <span className="title-username">John Doe</span></h1>
        <h2>Félicitation ! Vous avez explosé vos objectifs hier &#x1F44F;</h2>
        <div id="dashboard-cards-container">
          <section>
            <DashboardCard>
              hello world
            </DashboardCard>
          </section>
        </div>
      </section>
    </main>
  );
}
