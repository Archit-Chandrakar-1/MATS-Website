// src/components/Carousel.tsx
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Carousel: React.FC = () => {
  const images = [
    'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((p) => (p + 1) % images.length),
      2500,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden pt-32">
      {/* slides */}
      <div className="absolute inset-0">
        {images.map((src, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#142143]/40" />
          </div>
        ))}
      </div>

      {/* action buttons */}
      <div className="absolute bottom-[10%] inset-x-0 z-20">
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          {/* yellow buttons */}
          {[
            'MATS CENTRE FOR OPEN AND DISTANCE EDUCATION (ODL MODE)',
            'MATS CENTRE FOR ONLINE EDUCATION (ONLINE MODE)',
          ].map((label) => (
            <button
              key={label}
              className="bg-[#ffaf00] text-[#142143] px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center hover:bg-yellow-400 transition"
            >
              {label}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          ))}

          {/* outlined / white buttons */}
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
        {images.map((_, idx) => (
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
