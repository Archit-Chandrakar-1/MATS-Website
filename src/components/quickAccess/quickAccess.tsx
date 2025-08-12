// src/components/QuickAccess.tsx
import React, { useState } from 'react';
import { FileText, Bell, BookOpen } from 'lucide-react';

const quickSections = [
  {
    label: "Modern Infrastructure",
    content: (
      <ul className="space-y-4 text-[#142143] list-disc pl-2">
        <li>
          <strong>State-of-the-Art Facilities:</strong> Advanced classrooms and labs for enhanced learning.
        </li>
        <li>
          <strong>Sustainability:</strong> Green buildings, eco-friendly practices.
        </li>
        <li>
          <strong>Technology Integration:</strong> Smart classrooms and digital resources for better education.
        </li>
      </ul>
    )
  },
  {
    label: "Expert Faculty",
    content: (
      <ul className="space-y-4 text-[#142143] list-disc pl-2">
        <li>
          <strong>Experienced Professors:</strong> Industry veterans and high-qualified teachers.
        </li>
        <li>
          <strong>Research Focus:</strong> Active involvement in academic research and innovation.
        </li>
        <li>
          <strong>Mentorship:</strong> Frequent student mentorship programs.
        </li>
      </ul>
    )
  },
  {
    label: "Campus Culture",
    content: (
      <ul className="space-y-4 text-[#142143] list-disc pl-2">
        <li>
          <strong>Diversity & Inclusion:</strong> Welcoming students from all backgrounds.
        </li>
        <li>
          <strong>Student Life:</strong> Clubs, activities, events and fests year-round.
        </li>
        <li>
          <strong>Support Services:</strong> Counseling, wellness, and placement preparation.
        </li>
      </ul>
    )
  },
];

const QuickAccess: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 bg-gray-50">
      {/* Icons row */}
      <div className="grid grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="h-10 w-10 text-blue-600" />
          </div>
          <h3 className="text-lg font-bold text-[#142143] mb-2">
            Examination Timetable
          </h3>
        </div>
        <div className="text-center">
          <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Bell className="h-10 w-10 text-purple-600" />
          </div>
          <h3 className="text-lg font-bold text-[#142143] mb-2">
            Examination Notification
          </h3>
        </div>
        <div className="text-center">
          <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="h-10 w-10 text-cyan-600" />
          </div>
          <h3 className="text-lg font-bold text-[#142143] mb-2">
            Information Brochure
          </h3>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#142143]">What makes University Unique?</h2>
      </div>

      {/* Amber Box with Tabs */}
      <div className="bg-[#ffaf00] rounded-2xl p-8">
        <div className="grid grid-cols-3 gap-2 mb-6">
          {quickSections.map((sec, idx) => (
            <button
              key={sec.label}
              className={`text-xl lg:text-2xl font-bold text-[#142143] py-3 rounded-lg transition-all
                ${activeTab === idx
                  ? 'bg-white shadow'
                  : 'bg-transparent hover:bg-[#fff2cc]'}
              `}
              onClick={() => setActiveTab(idx)}
            >
              {sec.label}
            </button>
          ))}
        </div>
        <div className="bg-white rounded-xl p-6 min-h-[120px]">
          {quickSections[activeTab].content}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
