// src/components/Stats.tsx
import React from 'react';

const Stats: React.FC = () => (
  <section className="bg-gradient-to-r from-[#ffaf00] to-yellow-400 py-16">
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center">
      {[
        { number: '10000+', label: 'Enthusiastic Students' },
        { number: '10', label: 'Acres Modern Campus' },
        { number: '100+', label: 'Student Activity Every Year' },
        { number: '100+', label: 'Companies Placements' },
        { number: '10+', label: 'World Class Programs' },
      ].map((item, idx) => (
        <div key={idx}>
          <div className="text-4xl lg:text-5xl font-bold text-[#142143] mb-2">{item.number}</div>
          <div className="text-[#142143] font-semibold">{item.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
