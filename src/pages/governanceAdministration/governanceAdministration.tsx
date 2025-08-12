// src/pages/about/governanceAdministration.tsx
import React, { useState } from 'react';
import { ExternalLink, Users, Building, ChevronDown, Mail, Phone, MapPin } from 'lucide-react';

import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import ActionMenu from '../../components/actionMenu/actionMenu';
import ChatBot from '../../components/chatbot/chatbot';

const GovernanceAdministrationPage: React.FC = () => {
  const [activeOrgLevel, setActiveOrgLevel] = useState<number | null>(null);

  // Organizational Hierarchy Data
  const organizationHierarchy = [
    {
      level: 1,
      position: "VISITOR",
      name: "(Hon'ble Governor of Chattisgarh)",
      description: "Constitutional head of the university",
      color: "bg-purple-600",
      children: 1
    },
    {
      level: 2,
      position: "CHANCELLOR",
      name: "Shri Gajraj Pagariya",
      description: "Chief executive of the university",
      color: "bg-blue-600",
      children: 1
    },
    {
      level: 3,
      position: "VICE-CHANCELLOR",
      name: "Prof. (Dr.) K.P. Yadav",
      description: "Academic and administrative head",
      color: "bg-indigo-600",
      children: 2
    },
    {
      level: 4,
      position: "PRO VICE-CHANCELLOR",
      name: "Dr. Deepika Dhand",
      description: "Deputy to Vice-Chancellor",
      color: "bg-green-600",
      children: 0
    },
    {
      level: 4,
      position: "DIRECTOR GENERAL",
      name: "Priyesh Pagariya",
      description: "General administration",
      color: "bg-green-600",
      children: 3
    },
    {
      level: 5,
      position: "REGISTRAR",
      name: "Shri Gokulananda Panda",
      description: "Academic administration",
      color: "bg-yellow-600",
      children: 0
    },
    {
      level: 5,
      position: "CHIEF FINANCIAL OFFICER",
      name: "CA Sourabh Soni",
      description: "Financial management",
      color: "bg-red-600",
      children: 0
    },
    {
      level: 5,
      position: "DEANS/DIRECTORS/PRINCIPALS",
      name: "Various Schools & Departments",
      description: "Academic leadership",
      color: "bg-teal-600",
      children: 0
    }
  ];

  // Sponsoring Body Data
  const sponsoringBodyMembers = [
    { sno: 1, name: "Shri Gajraj Pagariya", designation: "President" },
    { sno: 2, name: "Shri Ashok Lunkad", designation: "Vice President" },
    { sno: 3, name: "Shri Priyesh Pagariya", designation: "Secretary" },
    { sno: 4, name: "Smt Priyanka Pagariya", designation: "Joint Secretary" },
    { sno: 5, name: "Shri Jaspreet Singh Bhata", designation: "Treasurer" },
    { sno: 6, name: "Shri Shaswat Lunawat", designation: "Member" },
    { sno: 7, name: "Shri Bankim Shukla", designation: "Member" },
    { sno: 8, name: "Shri Shubhas Agrawal", designation: "Member" },
    { sno: 9, name: "Smt Ugam Devi Pagariya", designation: "Member" },
    { sno: 10, name: "Dr Shubra Pagariya", designation: "Member" }
  ];

  // University Officials Data
  const universityOfficials = [
    { sno: 1, name: "Shri Gokulananda Panda", position: "Registrar", role: "Registrar's Office", email: "registrar@matsuniversity.ac.in" },
    { sno: 2, name: "Dr. Pradeep Kumar Saxena", position: "Controller of Examination", role: "Examination", email: "coe@matsuniversity.ac.in" },
    { sno: 3, name: "Prof. (Dr.) Parvinder Hanspal", position: "Director", role: "MCDOE", email: "directorodl@matsuniversity.ac.in" },
    { sno: 4, name: "Dr. Ashish Jha", position: "CoE, MCDOE", role: "PA to Chancellor", email: "drashishjha@matsuniversity.ac.in" },
    { sno: 5, name: "CA Sourabh Soni", position: "CFAO", role: "Accounts", email: "sourabhsoni@matsuniversity.ac.in" },
    { sno: 6, name: "Dr. Ramesh Kumar Sahu", position: "Deputy Registrar", role: "Academic Administration", email: "dr@matsuniversity.ac.in" },
    { sno: 7, name: "Syed Toufeeq", position: "Director", role: "Liasoning", email: "dcl@matsuniversity.ac.in" },
    { sno: 8, name: "Ms. Urshita Baranwal", position: "Assistant Registrar", role: "Academic Administration", email: "urshita@matsuniversity.ac.in" },
    { sno: 9, name: "Mr. Y. Krishna Rao", position: "Assistant Registrar", role: "HR", email: "hr@matsuniversity.ac.in" },
    { sno: 10, name: "Mr. Shrikant", position: "Assistant Registrar", role: "Training & Placement", email: "tnp@matsuniversity.ac.in" },
    { sno: 11, name: "Mr. Swarit Choudhrie", position: "Administrative Registrar", role: "Facilities & Operations", email: "swarit@matsuniversity.ac.in" },
    { sno: 12, name: "Mr. Ashish Kumar Dash", position: "Administrative Officer", role: "Facilities & Operations", email: "ashishkdash@matsuniversity.ac.in" },
    { sno: 13, name: "Mr. Meghanadhudu Katabathuni", position: "Manager", role: "Corporate Communications", email: "meghanadhudu@matsuniversity.ac.in" },
    { sno: 14, name: "Mr. Md. Sahir Siddiqui", position: "Manager", role: "Transport F&O", email: "sahirsiddiqui@matsuniversity.ac.in" },
    { sno: 15, name: "Mrs. Shahina Khan", position: "Manager", role: "Admissions F&O", email: "shahina@matsuniversity.ac.in" },
    { sno: 16, name: "Mrs. Rashida Amin", position: "Manager", role: "Admissions", email: "rashidaa@matsuniversity.ac.in" },
    { sno: 17, name: "Md. Shahid", position: "System Administrator", role: "IT", email: "shahid@matsuniversity.ac.in" },
    { sno: 18, name: "Mr. Gaurav Singh", position: "System Administrator", role: "IT", email: "gauravsingh@matsuniversity.ac.in" }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-32">
        
        {/* Hero Section */}
        <section className="bg-[#142143] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Governance & Administration</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our organizational structure, leadership hierarchy, and administrative framework
            </p>
          </div>
        </section>

        {/* Organization Hierarchy - 3D Interactive Chart */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#142143] mb-4">Organization Hierarchy</h2>
              <p className="text-lg text-gray-600">Interactive organizational structure of MATS University</p>
            </div>

            {/* 3D Style Flowchart */}
            <div className="relative">
              <div className="flex flex-col items-center space-y-8">
                
                {/* Level 1 - Visitor */}
                <div className="relative">
                  <div 
                    className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer max-w-sm"
                    onMouseEnter={() => setActiveOrgLevel(1)}
                    onMouseLeave={() => setActiveOrgLevel(null)}
                  >
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">VISITOR</h3>
                      <p className="text-sm opacity-90">(Hon'ble Governor of Chattisgarh)</p>
                      {activeOrgLevel === 1 && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white px-3 py-1 rounded text-sm whitespace-nowrap z-10">
                          Constitutional head of the university
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-full left-1/2 w-1 h-8 bg-gradient-to-b from-purple-600 to-blue-600 transform -translate-x-1/2"></div>
                </div>

                {/* Level 2 - Chancellor */}
                <div className="relative">
                  <div 
                    className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer max-w-sm"
                    onMouseEnter={() => setActiveOrgLevel(2)}
                    onMouseLeave={() => setActiveOrgLevel(null)}
                  >
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">CHANCELLOR</h3>
                      <p className="text-sm opacity-90">Shri Gajraj Pagariya</p>
                      {activeOrgLevel === 2 && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white px-3 py-1 rounded text-sm whitespace-nowrap z-10">
                          Chief executive of the university
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-full left-1/2 w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 transform -translate-x-1/2"></div>
                </div>

                {/* Level 3 - Vice Chancellor */}
                <div className="relative">
                  <div 
                    className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer max-w-sm"
                    onMouseEnter={() => setActiveOrgLevel(3)}
                    onMouseLeave={() => setActiveOrgLevel(null)}
                  >
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">VICE-CHANCELLOR</h3>
                      <p className="text-sm opacity-90">Prof. (Dr.) K.P. Yadav</p>
                      {activeOrgLevel === 3 && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white px-3 py-1 rounded text-sm whitespace-nowrap z-10">
                          Academic and administrative head
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Branching lines */}
                  <div className="absolute top-full left-1/2 w-1 h-8 bg-gradient-to-b from-indigo-600 to-green-600 transform -translate-x-1/2"></div>
                  <div className="absolute top-full left-1/2 w-96 h-1 bg-gradient-to-r from-green-600 to-green-600 transform -translate-x-1/2 translate-y-8"></div>
                </div>

                {/* Level 4 - Pro VC and Director General */}
                <div className="flex justify-center space-x-16 relative">
                  <div 
                    className="bg-gradient-to-br from-green-600 to-green-800 text-white p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer max-w-sm"
                    onMouseEnter={() => setActiveOrgLevel(4)}
                    onMouseLeave={() => setActiveOrgLevel(null)}
                  >
                    <div className="text-center">
                      <h3 className="text-lg font-bold mb-2">PRO VICE-CHANCELLOR</h3>
                      <p className="text-sm opacity-90">Dr. Deepika Dhand</p>
                      {activeOrgLevel === 4 && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white px-3 py-1 rounded text-sm whitespace-nowrap z-10">
                          Deputy to Vice-Chancellor
                        </div>
                      )}
                    </div>
                  </div>

                  <div 
                    className="bg-gradient-to-br from-green-600 to-green-800 text-white p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer max-w-sm relative"
                    onMouseEnter={() => setActiveOrgLevel(5)}
                    onMouseLeave={() => setActiveOrgLevel(null)}
                  >
                    <div className="text-center">
                      <h3 className="text-lg font-bold mb-2">DIRECTOR GENERAL</h3>
                      <p className="text-sm opacity-90">Priyesh Pagariya</p>
                      {activeOrgLevel === 5 && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white px-3 py-1 rounded text-sm whitespace-nowrap z-10">
                          General administration
                        </div>
                      )}
                    </div>
                    {/* Branching from Director General */}
                    <div className="absolute top-full left-1/2 w-1 h-8 bg-gradient-to-b from-green-600 to-yellow-600 transform -translate-x-1/2"></div>
                    <div className="absolute top-full left-1/2 w-80 h-1 bg-gradient-to-r from-yellow-600 to-yellow-600 transform -translate-x-1/2 translate-y-8"></div>
                  </div>
                </div>

                {/* Level 5 - Department Heads */}
                <div className="flex justify-center space-x-8 flex-wrap gap-4">
                  <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 text-white p-4 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 max-w-xs">
                    <div className="text-center">
                      <h4 className="text-md font-bold mb-1">REGISTRAR</h4>
                      <p className="text-xs opacity-90">Shri Gokulananda Panda</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-red-600 to-red-800 text-white p-4 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 max-w-xs">
                    <div className="text-center">
                      <h4 className="text-md font-bold mb-1">CFO</h4>
                      <p className="text-xs opacity-90">CA Sourabh Soni</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white p-4 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 max-w-xs">
                    <div className="text-center">
                      <h4 className="text-md font-bold mb-1">DEANS/DIRECTORS</h4>
                      <p className="text-xs opacity-90">Various Schools</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsoring Body */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#142143] mb-4">Sponsoring Body</h2>
              <p className="text-lg text-gray-600">
                Shri Bhagwan Mahaveer Jain Educational and Cultural Society (SBMJECS)
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-[#142143] text-white py-4">
                <div className="grid grid-cols-3 gap-4 px-6">
                  <div className="font-bold text-lg">S. No.</div>
                  <div className="font-bold text-lg">Name of the Officials</div>
                  <div className="font-bold text-lg">Designation</div>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {sponsoringBodyMembers.map((member, index) => (
                  <div key={member.sno} className={`grid grid-cols-3 gap-4 px-6 py-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-[#ffaf00]/10 transition-colors`}>
                    <div className="font-semibold text-[#142143]">{member.sno}</div>
                    <div className="text-gray-700">{member.name}</div>
                    <div className="text-gray-700">{member.designation}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Visitor of the University */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#142143] mb-4">Visitor of the University</h2>
              <p className="text-lg text-gray-600 mb-8">
                The Hon'ble Governor of Chhattisgarh serves as the Visitor of MATS University
              </p>
              
              <a
                href="https://rajbhavancg.gov.in/honorable-governors/honorable-governors.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#ffaf00] text-[#142143] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Building className="mr-3 h-6 w-6" />
                Visit Raj Bhavan Official Website
                <ExternalLink className="ml-3 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* University Officials Directory */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#142143] mb-4">University Officials Directory</h2>
              <p className="text-lg text-gray-600">
                Contact information for key administrative personnel
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-[#142143] text-white py-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-6">
                  <div className="font-bold text-sm md:text-base">Sr. No.</div>
                  <div className="font-bold text-sm md:text-base">Name & Position</div>
                  <div className="font-bold text-sm md:text-base">Role</div>
                  <div className="font-bold text-sm md:text-base">Email</div>
                </div>
              </div>
              <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
                {universityOfficials.map((official, index) => (
                  <div key={official.sno} className={`grid grid-cols-1 md:grid-cols-4 gap-4 px-6 py-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-[#ffaf00]/10 transition-colors`}>
                    <div className="font-semibold text-[#142143] md:text-center">{official.sno}</div>
                    <div>
                      <div className="font-semibold text-gray-800">{official.name}</div>
                      <div className="text-sm text-gray-600">{official.position}</div>
                    </div>
                    <div className="text-gray-700 text-sm">{official.role}</div>
                    <div>
                      <a 
                        href={`mailto:${official.email}`}
                        className="text-[#142143] hover:text-[#ffaf00] transition-colors text-sm flex items-center"
                      >
                        <Mail className="h-4 w-4 mr-1" />
                        {official.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <ActionMenu />
      <ChatBot />
      <Footer />
    </>
  );
};

export default GovernanceAdministrationPage;
