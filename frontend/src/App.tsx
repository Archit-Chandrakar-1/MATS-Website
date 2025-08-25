import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/homePage/homePage';
import PlacementPage from './pages/placementPage/placement';
import OverviewLeadershipPage from './pages/overviewLeadership/overviewLeadership';
import GovernanceAdministrationPage from './pages/governanceAdministration/governanceAdministration';
import RegulationsApprovalPage from './pages/regulationApproval/regulationApproval';
import DevelopmentAccredinationPage from './pages/developmentAccerditation/developmentAccerditation';
import AnnualReportPage from './pages/annualReport/annualReport';
import GalleryPage from './pages/gallery/gallery';
import EventGallery from './pages/eventGallery/eventGallery';
import UniversityAcademic from './pages/universityAcademic/universityAcademic';
import ResearchDevelopment from './pages/researchDevelopment/researchDevelopment';
import ManagementBusinessPage from './pages/departments/managementBusiness';

import AdminDashboard from './pages/admin/adminDashboard';



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
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/:eventSlug" element={<EventGallery />} />
        <Route path="/academics" element={<UniversityAcademic />} />
        <Route path="/research-development" element={<ResearchDevelopment />} />
        <Route path="/management-business" element={<ManagementBusinessPage/>} />
        
        <Route path="/admin" element={<AdminDashboard/>} />

        
        
        
        


        
        
      </Routes>
    </Router>
  );
}

export default App;