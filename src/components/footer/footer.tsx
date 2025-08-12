// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-[#142143] text-white pt-12">
    <div style={{ background: '#142143' }}>
      <div className="flex flex-col md:flex-row text-white justify-between gap-8 px-8 py-12">

        {/* Left section */}
        <div>
          <h3 className="font-bold text-lg mb-2">Admission Office</h3>
          <div className="mb-4">
            <p className="font-semibold">Address Raipur:</p>
            <p>MATS Tower, Pandri, Raipur (Chhattisgarh), Pincode-492 004</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Campus</p>
            <p>Address Gullu, Aarang:</p>
            <p>Aarang-Kharora Highway, Gullu, Aarang, Raipur (Chhattisgarh)</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Admission Helpline No.:</p>
            <p>1800123819999</p>
            <p>(0771) 4078995, 4078996, 4078998</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Email:</p>
            <p>admissions@matsuniversity.ac.in</p>
          </div>
          <div className="font-bold mt-4">Public Self Disclosure</div>
        </div>

        {/* Middle section */}
        <div>
          <h3 className="font-bold text-lg mb-2">Top Link</h3>
          <ul className="flex flex-col gap-2">
            <li>Admission</li>
            <li>Examination</li>
            <li>Library</li>
            <li>Placement</li>
            <li>Anti Ragging</li>
            <li>Grievances Redressal</li>
            <li>Internal Complaints Committee</li>
            <li>NCC And NSS</li>
            <li>Convocation</li>
            <li>IQAC</li>
            <li>Job Openings</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Right section */}
        <div>
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li>UGC</li>
            <li>NAAC</li>
            <li>Rajbhavan</li>
            <li>CG Higher Education</li>
            <li>CG PURC</li>
            <li>AICTE</li>
            <li>BCI</li>
            <li>PCI</li>
            <li>NCTE</li>
            <li>NCTE WRC</li>
            <li>NIRF</li>
            <li>AISHE</li>
            <li>UGC E-Samadhan</li>
            <li>Study in India</li>
            <li>AIU</li>
            <li>ECI – Voter Portal</li>
            <li>Academic Bank of Credits</li>
            <li>NAD – Digilocker</li>
          </ul>
        </div>
      </div>
      <div className="text-center py-6 text-gray-300 text-sm border-t border-white/20">
        © MATS University. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
