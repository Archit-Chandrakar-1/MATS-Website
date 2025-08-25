import React from 'react';

interface GallerySectionProps {
  photos: string[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ photos }) => (
  <section className="mb-8 px-2 sm:px-6 md:px-12">
    <h2 className="text-2xl font-bold mb-3 text-[#142143]">Gallery</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {photos.map((url, i) => (
        <img
          key={i}
          src={url}
          alt={`Department Activity ${i + 1}`}
          className="rounded shadow-lg w-full h-40 object-cover"
        />
      ))}
    </div>
  </section>
);

export default GallerySection;
