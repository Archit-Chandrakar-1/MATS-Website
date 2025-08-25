// src/pages/admin/AdminDashboard.tsx

import React, { useState } from 'react';
import AdminCarousel from '../../components/adminComponents/adminCarousel';
import AdminRegulation from '../../components/adminComponents/adminRegulation';



const sidebarItems = [
  { id: 'admin-carousel', label: 'Main Carousel' },
  { id: 'admin-regulations', label: 'Regulations & Approvals' },
  
];

const AdminDashboard: React.FC = () => {
  const [selected, setSelected] = useState(sidebarItems[0].id);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-[#142143] text-white flex flex-col pt-8">
        <div className="px-6 text-2xl font-bold mb-8">Dashboard</div>
        <nav className="flex-1">
          {sidebarItems.map(item => (
            <button
              key={item.id}
              className={`w-full px-6 py-3 text-left font-semibold hover:bg-[#ffaf00] hover:text-[#142143] transition ${
                selected === item.id ? 'bg-[#ffaf00] text-[#142143]' : ''
              }`}
              onClick={() => setSelected(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-[#142143]">Admin Panel</h1>
          <input
            type="text"
            placeholder="Search Dashboard"
            className="px-4 py-2 border rounded shadow"
          />
        </div>

        <div className="bg-white p-8 rounded shadow">
          {selected === 'admin-carousel' && <AdminCarousel />}
          {selected === 'admin-regulations' && <AdminRegulation />}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
