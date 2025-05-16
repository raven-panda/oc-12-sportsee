import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "./views/Dashboard";
import MainLayout from "./components/layout/MainLayout";
import ErrorPage from "@/views/error/ErrorPage.tsx";
import { PageErrorContextProvider } from "@/components/context/PageErrorContext.tsx";

function App() {
  return (
    <PageErrorContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="user/:userId" element={<DashboardPage />} />
            <Route index element={<Navigate to={"/not-found"} />} />
            <Route
              path="*"
              element={<ErrorPage error="Cette page n'existe pas." />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </PageErrorContextProvider>
  );
}

export default App;
