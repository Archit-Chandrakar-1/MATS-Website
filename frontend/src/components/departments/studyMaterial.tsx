import React from 'react';

interface StudyMaterial {
  title: string;
  fileUrl: string;
}

interface StudyMaterialSectionProps {
  materials: StudyMaterial[];
}

const StudyMaterialSection: React.FC<StudyMaterialSectionProps> = ({ materials }) => (
<>
<section className="mb-8 px-2 sm:px-6 md:px-12">
    <h2 className="text-2xl font-bold mb-3 text-[#142143]">Study Material</h2>
    <ul className="space-y-2">
      {materials.map((m, i) => (
        <li key={i}>
          <a
            href={m.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffaf00] font-semibold underline hover:text-[#FFD34E] transition"
          >
            {m.title}
          </a>
        </li>
      ))}
    </ul>
  </section>
  </>
);

export default StudyMaterialSection;
