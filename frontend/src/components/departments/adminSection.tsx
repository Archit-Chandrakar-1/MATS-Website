import React, { useState } from 'react';

type AcademicFile = {
  title: string;
  fileUrl: string;
  format: 'pdf' | 'img';
};

interface AcademicSectionProps {
  syllabus: AcademicFile[];
  research: AcademicFile[];
  achievements: AcademicFile[];
}

const FileList: React.FC<{ files: AcademicFile[] }> = ({ files }) => (
  <ul className="space-y-2">
    {files.map((file, idx) => (
      <li key={idx} className="flex items-center gap-3">
        {file.format === 'img' ? (
          <img
            src={file.fileUrl}
            alt={file.title}
            className="w-16 h-16 object-cover rounded border"
          />
        ) : (
          <a
            href={file.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffaf00] text-white px-4 py-2 rounded font-semibold inline-block transition hover:bg-[#FFD34E]"
          >
            View PDF
          </a>
        )}
        <span className="font-medium text-[#142143]">{file.title}</span>
      </li>
    ))}
  </ul>
);

const Panel: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 border rounded-lg bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3 font-bold text-[#142143] flex justify-between items-center focus:outline-none"
      >
        {title}
        <span>{open ? '−' : '+'}</span>
      </button>
      {open && <div className="px-4 pb-4">{children}</div>}
    </div>
  );
};

const AcademicSection: React.FC<AcademicSectionProps> = ({ syllabus, research, achievements }) => (
  <section className="mb-8 px-2 sm:px-6 md:px-12">
    <h2 className="text-2xl font-bold mb-3 text-[#142143]">Department - Academic</h2>
    <Panel title="Syllabus">
      <FileList files={syllabus} />
    </Panel>
    <Panel title="Research & Publications">
      <FileList files={research} />
    </Panel>
    <Panel title="Achievements">
      <FileList files={achievements} />
    </Panel>
  </section>
);

export default AcademicSection;
