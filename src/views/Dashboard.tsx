import "./dashboard.css";
import SidebarNavigation from "../components/layout/SidebarNavigation";
import { useUserData } from "@/hook/UserHooks.ts";
import InfoCard from "@/components/card/InfoCard.tsx";
import FireIcon from "@/components/icon/FireIcon.tsx";
import ChickenIcon from "@/components/icon/ChickenIcon.tsx";
import AppleIcon from "@/components/icon/AppleIcon.tsx";
import CheeseburgerIcon from "@/components/icon/CheeseburgerIcon.tsx";
import ActivityCard from "@/components/charts/ActivityChart.tsx";
import AverageSessionLengthCard from "@/components/charts/AverageSessionLengthCard.tsx";
import SessionTypeRadarChart from "@/components/charts/SessionTypeRadarChart.tsx";
import ScoreCard from "@/components/charts/ScoreCard.tsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import LoadingIndicator from "@/components/LoadingIndicator.tsx";

export default function DashboardPage() {
  const {
    mainData,
    activities,
    averageSessions,
    performances,
    isLoading,
    setUserId,
  } = useUserData();
  const params = useParams();

  useEffect(() => {
    if (params?.userId) setUserId(Number(params.userId));
  }, [params, setUserId]);

  return (
    <main className="dashboard">
      <SidebarNavigation variant={"dashboard"} />
      <section className="dashboard-main-section">
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <>
            <h1>
              Bonjour,{" "}
              <span className="title-username">
                {mainData?.userInfos.firstName} {mainData?.userInfos.lastName}
              </span>
            </h1>
            <h2>
              Félicitation ! Vous avez explosé vos objectifs hier &#x1F44F;
            </h2>
            <div id="dashboard-cards-container">
              <section>
                <ActivityCard activities={activities} />
                <div id={"dashboard-sub-cards"}>
                  <AverageSessionLengthCard sessions={averageSessions} />
                  <SessionTypeRadarChart performances={performances} />
                  <ScoreCard score={mainData?.todayScore} />
                </div>
              </section>
              <section>
                <InfoCard
                  variant={"red"}
                  icon={<FireIcon />}
                  name="Calories"
                  amount={formatToK(mainData?.keyData.calorieCount)}
                  unit="kCal"
                />
                <InfoCard
                  variant={"blue"}
                  icon={<ChickenIcon />}
                  name="Proteines"
                  amount={mainData?.keyData.proteinCount ?? 0}
                  unit="g"
                />
                <InfoCard
                  variant={"yellow"}
                  icon={<AppleIcon />}
                  name="Glucides"
                  amount={mainData?.keyData.carbohydrateCount ?? 0}
                  unit="g"
                />
                <InfoCard
                  variant={"pink"}
                  icon={<CheeseburgerIcon />}
                  name="Lipides"
                  amount={mainData?.keyData.lipidCount ?? 0}
                  unit="g"
                />
              </section>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

function formatToK(amount: number | undefined) {
  if (!amount) return 0;

  return (amount / 1000)
    .toLocaleString("en-US", { minimumFractionDigits: 3 })
    .replace(".", ",");
}
