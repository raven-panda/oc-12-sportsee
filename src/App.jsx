import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./views/Dashboard.jsx";
import MainLayout from "./components/layout/MainLayout.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
