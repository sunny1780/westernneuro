import React, { useEffect, useRef, useState } from 'react';

const serviceImages = [
  '/images/services/1.jpg',
  '/images/services/2.jpg',
  '/images/services/3.jpg',
  '/images/services/disorder1.png',
  '/images/services/head1.jpg',
  '/images/services/eeg1.png',
];

const OurServicesHero = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 sm:px-6 md:px-16 overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full text-center">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-semibold text-[#0A8DDB] mb-4 md:mb-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Our Services
        </h1>
        <p
          className={`text-[#687076] text-base md:text-lg max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: isVisible ? '150ms' : '0ms' }}
        >
          Specialized care for neuromuscular disorders using advanced EMG and nerve conduction studies for accurate diagnosis and targeted treatment.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {serviceImages.map((src, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl overflow-hidden bg-gray-800"
            >
              <img
                src={src}
                alt={`Service ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesHero;
