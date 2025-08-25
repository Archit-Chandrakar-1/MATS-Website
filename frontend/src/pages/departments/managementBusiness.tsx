// src/pages/departments/ManagementBusiness.tsx
import React from 'react';
import DescriptionBlock from '../../components/departments/departmentBlock';
import AcademicSection from '../../components/departments/adminSection';
import StudyMaterialSection from '../../components/departments/studyMaterial';
import GallerySection from '../../components/departments/gallerySection';
import Navbar from '../../components/navbar/navbar';
import ActionMenu from '../../components/actionMenu/actionMenu';
import Footer from '../../components/footer/footer';



const departmentData = {
  description:
    "MATS School of Management & Business Studies offers cutting-edge programs blending theory and practical management skills, preparing students for leadership roles in business, industry, and academia.",

  syllabus: [
    { title: "MBA Syllabus 2024", fileUrl: "https://example.com/demo/MBA_syllabus.pdf", format: "pdf" },
    { title: "BBA Semester 1", fileUrl: "https://via.placeholder.com/150x150.png?text=BBA+Syllabus", format: "img" },
  ],

  research: [
    { title: "Management Journal Vol 5", fileUrl: "https://example.com/demo/management_journal_vol5.pdf", format: "pdf" },
    { title: "Students Research Poster", fileUrl: "https://via.placeholder.com/150x200.png?text=Research+Poster", format: "img" },
  ],

  achievements: [
    { title: "Placement Brochure", fileUrl: "https://example.com/demo/placement_brochure.pdf", format: "pdf" },
  ],

  materials: [
    { title: "Financial Accounting Notes", fileUrl: "https://example.com/demo/financial_accounting_notes.pdf" },
    { title: "Marketing PPT", fileUrl: "https://example.com/demo/marketing_ppt.pdf" },
  ],

  photos: [
    "https://via.placeholder.com/400x300.png?text=Department+Activity+1",
    "https://via.placeholder.com/400x300.png?text=Department+Activity+2",
    "https://via.placeholder.com/400x300.png?text=Department+Activity+3",
  ],
};


const ManagementBusinessPage: React.FC = () => (
<>
  <Navbar />
  <main style={{ marginLeft: '10px', marginRight: '10px' }} className="w-full pt-20 py-10 bg-gray-50">
    <DescriptionBlock description={departmentData.description} />
    <AcademicSection
      syllabus={departmentData.syllabus}
      research={departmentData.research}
      achievements={departmentData.achievements}
    />
    <StudyMaterialSection materials={departmentData.materials} />
    <GallerySection photos={departmentData.photos} />
  </main>
  <ActionMenu />
  <Footer />
</>
);

export default ManagementBusinessPage;
