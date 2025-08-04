import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonalProfile from "./pages/PersonalProfile";
import Study from "./pages/study";
import Health from "./pages/Health";
import Housing from "./pages/Housing";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import "./index.css";

import FamilyWork from "./pages/work";
import CrisisImpact from "./pages/CrisisImpact";
import DataAnalyser from "./pages/DataAnalyser";
import HealthAnalyser from "./pages/HealthAnalyser";
import Population from "./pages/Population";
import Education from "./pages/Education";
import Financial from "./pages/Financial";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalProfile />} />
        <Route path="/study" element={<Study />} />
        <Route path="/health" element={<Health />} />
        <Route path="/housing" element={<Housing />} />
        <Route path="/PersonalInfoPage" element={<PersonalInfoPage />} />
        <Route path="/family-work" element={<FamilyWork />} />
        <Route path="/crisis-impact" element={<CrisisImpact />} />
        <Route path="/analyser" element={<DataAnalyser />} />
        <Route path="/analyser/health" element={<HealthAnalyser />} />
        <Route path="/analyser/population" element={<Population />} />
        <Route path="/analyser/education" element={<Education />} />
        <Route path="/analyser/financial" element={<Financial />} />
      </Routes>
    </Router>
  );
}
