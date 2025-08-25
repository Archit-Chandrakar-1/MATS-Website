import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

type MediaItem = {
  id: string;
  type: 'image' | 'video';
  url: string;
  filename: string;
};

const Carousel: React.FC = () => {
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [current, setCurrent] = useState(0);

  // Fetch carousel media from backend API
  const fetchMedia = async () => {
    try {
      const res = await fetch('/api/carousel/media');
      if (res.ok) {
        const data = await res.json();
        setMediaList(data);
        setCurrent(0); // reset to first slide
      } else {
        console.error('Failed to fetch carousel media');
      }
    } catch (error) {
      console.error('Error fetching carousel media:', error);
    }
  };

  // Fetch media on component mount
  useEffect(() => {
    fetchMedia();
  }, []);

  // Auto-slide every 2.5 seconds
  useEffect(() => {
    if (mediaList.length === 0) return;
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % mediaList.length);
    }, 2500);
    return () => clearInterval(id);
  }, [mediaList]);

  if (mediaList.length === 0) {
    return (
      <section className="relative h-screen overflow-hidden pt-32 flex items-center justify-center text-gray-600">
        Loading carousel...
      </section>
    );
  }

  return (
    <section className="relative h-screen overflow-hidden pt-32">
      {/* slides */}
      <div className="absolute inset-0">
        {mediaList.map((media, idx) => (
          <div
            key={media.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {media.type === 'image' ? (
              <>
                <img src={media.url} alt={media.filename} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#142143]/40" />
              </>
            ) : (
              <video
                src={media.url}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            )}
          </div>
        ))}
      </div>

      {/* action buttons */}
      <div className="absolute bottom-[10%] inset-x-0 z-20">
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          {[
            {
              label: 'MATS CENTRE FOR OPEN AND DISTANCE EDUCATION (ODL MODE)',
              link: 'https://matsodl.com/',
            },
            {
              label: 'MATS CENTRE FOR ONLINE EDUCATION (ONLINE MODE)',
              link: 'https://matsuniversityonline.com/',
            },
          ].map(({ label, link }) => (
            <a
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffaf00] text-[#142143] px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center hover:bg-yellow-400 transition"
            >
              {label}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          ))}

          <a
            href="https://panel123.s3.ap-south-1.amazonaws.com/360Vtour_Mats_Univ/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-white hover:text-[#142143] transition-colors"
          >
            Virtual Tour
          </a>

          <a
            href="https://smarthubeducation.hdfcbank.com/SmartFees/DirectLoadQuickPay.action;jsessionid=D2kyJKUFpbxO_ynTCB1y1BKutUexST3J0Cn1AaLe.dr-we-eq2-pgpr-l34?uniqueSessionIdentifier=null&redirectionURL="
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#142143] px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-gray-100 transition-colors"
          >
            Online Fee Payment
          </a>
        </div>
      </div>

      {/* indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {mediaList.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === current ? 'bg-[#ffaf00]' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
