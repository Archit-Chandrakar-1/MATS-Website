import React from 'react';

interface DescriptionBlockProps {
  description: string;
}

const DescriptionBlock: React.FC<DescriptionBlockProps> = ({ description }) => (
  <>
   <section className="w-full bg-[#142143] py-8 px-2 sm:px-6 md:px-12">
    <h2 className="text-3xl font-bold text-[#ffaf00] mb-4">About Department</h2>
    <p className="text-white text-lg">{description}</p>
  </section>
  </>
);

export default DescriptionBlock;
