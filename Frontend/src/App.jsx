import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonalProfile from './pages/PersonalProfile';
import Study from './pages/Study';
import Health from './pages/Health';
import Housing from './pages/Housing';
import PersonalInfoPage from './pages/PersonalInfoPage';
import './index.css'

import FamilyWork from './pages/work';
import CrisisImpact from './pages/CrisisImpact';

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
      </Routes>
    </Router>
  );
}
