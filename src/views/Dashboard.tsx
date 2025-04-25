import './dashboard.css';
import SidebarNavigation from "../components/layout/SidebarNavigation";

export default function DashboardPage() {
  return (
    <main className="dashboard">
      <SidebarNavigation variant={"dashboard"} />
      <section className="dashboard-main-section">
      </section>
    </main>
  );
}
