import React, { useRef, useState, useEffect } from 'react';

const logos = [
  '/images/affone.png',
  '/images/afftwo.png',
  '/images/affthree.png',
  '/images/afffour.png',
  '/images/afffive.png',
  '/images/affsix.png',
  '/images/affseven.png',
  '/images/affeight.png',
  '/images/affnine.png',
  '/images/afften.png',
  '/images/affeleven.png',
  '/images/afftwelve.png',
];

const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.threshold, options.rootMargin]);

  return [ref, isInView];
};

const AffiliateInsurance = () => {
  const [sectionRef, sectionInView] = useInView();

  return (
    <section ref={sectionRef} className="bg-white py-6 md:py-10 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main heading */}
        <h2
          className={`text-[48px] font-medium text-[#11181C] leading-[1] mb-4 ${
            sectionInView ? 'animate-slide-up-bounce' : 'opacity-0'
          }`}
          style={{ letterSpacing: '0.5%' }}
        >
          Affiliate Insurance
        </h2>

        {/* Subheading */}
        <p
          className={`text-[18px] leading-[28px] font-normal text-[#687076] mb-12 max-w-2xl mx-auto ${
            sectionInView ? 'animate-slide-up-bounce' : 'opacity-0'
          }`}
          style={{
            ...(sectionInView ? { animationDelay: '100ms' } : {}),
            letterSpacing: '0.5%',
          }}
        >
          At Western Neuro, we accept most insurance plans. Here is a list of some of the plans that we accept. Please contact our office if you do not see your insurance provider listed!
        </p>

        {/* 12 logos in 3 rows (4 per row) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {logos.map((src, index) => (
            <div
              key={index}
              className={`rounded-xl bg-white border border-gray-200 shadow-sm overflow-hidden flex items-center justify-center aspect-[2/1] min-h-[80px] p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#1299ED]/30 ${
                sectionInView ? 'animate-pop-in' : 'opacity-0'
              }`}
              style={
                sectionInView
                  ? { animationDelay: `${200 + index * 60}ms` }
                  : {}
              }
            >
              <img
                src={src}
                alt={`Affiliate ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliateInsurance;
