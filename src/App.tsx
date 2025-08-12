import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/homePage/homePage';
import PlacementPage from './pages/placementPage/placement';
import OverviewLeadershipPage from './pages/overviewLeadership/overviewLeadership';
import GovernanceAdministrationPage from './pages/governanceAdministration/governanceAdministration';
import RegulationsApprovalPage from './pages/regulationApproval/regulationApproval';
import DevelopmentAccredinationPage from './pages/developmentAccerditation/developmentAccerditation';
import AnnualReportPage from './pages/annualReport/annualReport';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/placement" element={<PlacementPage />} />
        <Route path="/overview" element={<OverviewLeadershipPage />} />
        <Route path="/governance" element={<GovernanceAdministrationPage />} />
        <Route path="/regulation" element={<RegulationsApprovalPage />} />
        <Route path="/development" element={<DevelopmentAccredinationPage />} />
        <Route path="/reports" element={<AnnualReportPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;