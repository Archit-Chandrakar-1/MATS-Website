// src/components/About.tsx
import React from 'react';

const About: React.FC = () => (
  <section id="about" className="py-20 bg-white">
    {/* 20 px left padding (pl-5 ≈ 20 px)  */}
    <div className="pl-5">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Images */}
        <div className="grid grid-cols-3 gap-4 mr-5 sm:mr-8 lg:mr-0 -mt-6 sm:mt-0">
  {[
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
  ].map((src, idx) => (
    <div
      key={idx}
      className="relative w-full aspect-square overflow-hidden rounded-lg bg-gray-200"
    >
      <img
        src={src}
        alt="Gallery"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  ))}
</div>

        {/* Text */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#142143] mb-6">About Us</h2>
          <p className="text-xl text-gray-700 mb-6">
            MATS University is one of the leading universities of Central India.
          </p>
          <p className="text-gray-600 mb-6 mr-5">
          MATS University is one of the leading universities of Central India.
          At MATS, we are committed to developing leaders who are not merely skilled professionals but also compassionate people with strong ethical values and discipline.
          We provide our students with the information, skills, confidence, and experience necessary to improve the world around them. MATS University not only develops their students individually but also gives them time and opportunity to develop new interests, learn new skills, and meet new people.
          Established in 2006, MATS University has emerged as a leading educational institute in Raipur, committed to nurturing future leaders and professionals across various disciplines. We take pride in our distinguished faculty members who are experts in their respective roles, dedicating themselves to imparting knowledge and mentorship to our students.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
