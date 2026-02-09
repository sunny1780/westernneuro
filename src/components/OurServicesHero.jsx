import React, { useEffect, useRef, useState } from 'react';

const serviceImages = [
  '/images/services/1.jpg',
  '/images/services/2.jpg',
  '/images/services/3.jpg',
  '/images/services/disorder1.png',
  '/images/services/head1.jpg',
  '/images/services/eeg1.png',
  // '/images/services/eeg2.png',
];

const imageSizes = [
  'h-[148px] md:h-[154px]', // big
  'h-[88px] md:h-[104px]',  // small
  'h-[158px] md:h-[184px]', // big
  'h-[148px] md:h-[154px]',  // small
  'h-[188px] md:h-[204px]', // big
  'h-[88px] md:h-[104px]',  // small
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
        <style>{`
          @keyframes services-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
        <h1
          className={`text-[96px] font-medium text-[#053759] leading-[1] mb-4 md:mb-6 ${
            isVisible ? 'animate-slide-up-bounce' : 'opacity-0'
          }`}
          style={{ letterSpacing: '0.5%' }}
        >
          Our Services
        </h1>
        <p
          className={`text-[#687076] text-base md:text-lg max-w-3xl mx-auto mb-12 md:mb-16 ${
            isVisible ? 'animate-slide-up-bounce' : 'opacity-0'
          }`}
          style={isVisible ? { animationDelay: '150ms' } : {}}
        >
          Specialized care for neuromuscular disorders using advanced EMG and nerve conduction studies for accurate diagnosis and targeted treatment.
        </p>

        <div className="overflow-hidden -mx-4 sm:-mx-6 md:-mx-16">
          <div
            className="flex items-end gap-4 md:gap-6 w-max"
            style={{ animation: 'services-marquee 18s linear infinite' }}
          >
            {[...serviceImages, ...serviceImages].map((src, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden bg-gray-800 ${imageSizes[i % serviceImages.length] || 'h-[80px] md:h-[92px]'} w-[140px] md:w-[160px]`}
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
      </div>
    </section>
  );
};

export default OurServicesHero;
