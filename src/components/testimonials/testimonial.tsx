// src/components/Testimonials.tsx
import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'MATS University provided me with not just quality education but also the confidence to pursue my dreams. The faculty support and modern facilities made my learning journey exceptional.',
    name: 'Anita Sharma',
    details: 'MBA Graduate, 2023',
    initial: 'A',
    bgColor: 'bg-[#ffaf00]',
    textColor: 'text-[#142143]',
  },
  {
    quote:
      'The practical approach to learning at MATS University helped me secure a great placement. The industry connections and placement support are truly remarkable.',
    name: 'Rahul Patel',
    details: 'B.Tech Graduate, 2022',
    initial: 'R',
    bgColor: 'bg-[#142143]',
    textColor: 'text-white',
  },
  {
    quote:
      'The ODL program at MATS University allowed me to continue my education while working. The flexibility and quality of education exceeded my expectations.',
    name: 'Priya Singh',
    details: 'MCA Student, Current',
    initial: 'P',
    bgColor: 'bg-[#ffaf00]',
    textColor: 'text-[#142143]',
  },
];

const MOBILE_BREAKPOINT = 768; // px
const AUTO_SLIDE_INTERVAL = 3000; // ms

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT,
  );

  // detect resize
  useEffect(() => {
    const onResize = () =>
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // auto-slide on mobile
  useEffect(() => {
    if (!isMobile) return;
    const id = setInterval(
      () => setCurrent((prev) => (prev + 1) % testimonials.length),
      AUTO_SLIDE_INTERVAL,
    );
    return () => clearInterval(id);
  }, [isMobile]);

  // helpers
  const goTo = (idx: number) => setCurrent(idx);

  const Card = ({
    testimonial,
  }: {
    testimonial: typeof testimonials[number];
  }) => (
    <div
      className={`${testimonial.bgColor} ${testimonial.textColor} rounded-2xl p-8 relative w-full`}
    >
      <Quote
        className={`h-12 w-12 mb-6 ${
          testimonial.bgColor === 'bg-[#ffaf00]'
            ? 'text-[#142143]/30'
            : 'text-white/30'
        }`}
      />
      <p className="text-lg mb-8 leading-relaxed">"{testimonial.quote}"</p>
      <div className="flex items-center">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4 ${
            testimonial.bgColor === 'bg-[#ffaf00]'
              ? 'bg-[#142143] text-white'
              : 'bg-[#ffaf00] text-[#142143]'
          }`}
        >
          {testimonial.initial}
        </div>
        <div>
          <h4 className="font-bold text-lg">{testimonial.name}</h4>
          <p
            className={`text-sm ${
              testimonial.bgColor === 'bg-[#ffaf00]'
                ? 'text-[#142143]/80'
                : 'text-white/80'
            }`}
          >
            {testimonial.details}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#142143] mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Hear from our successful graduates and current students about their
            MATS University experience.
          </p>
        </div>

        {/* Desktop grid */}
        {!isMobile && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} testimonial={t} />
            ))}
          </div>
        )}

        {/* Mobile carousel */}
        {isMobile && (
          <div className="relative">
            <Card testimonial={testimonials[current]} />

            {/* indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`w-3 h-3 rounded-full ${
                    idx === current ? 'bg-[#ffaf00]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
