import React, { useRef, useState, useEffect } from 'react';

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

const Moreclinis = () => {
  const [leftRef, leftInView] = useInView();
  const [rightRef, rightInView] = useInView();

  return (
    <section id="moreclinis" className="bg-white py-10 sm:py-12 md:py-20 px-4 sm:px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center">
          {/* Left - Large Image */}
          <div
            ref={leftRef}
            className={`rounded-2xl overflow-hidden pt-60 ${leftInView ? 'animate-slide-in-left-bounce' : 'opacity-0'}`}
          >
            <div className="group">
              <img
                src="/images/Docs.png"
                alt="Western Neurological Associates - Western Sleep Center"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div ref={rightRef} className="text-left">
            {/* Two images - cli1 smaller, cli2 bigger */}
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.4fr] items-end gap-4 mb-6">
              <div
                className={`rounded-xl overflow-hidden ${rightInView ? 'animate-pop-in' : 'opacity-0'}`}
                style={rightInView ? { animationDelay: '0ms' } : {}}
              >
                <img
                  src="/images/cli1.png"
                  alt="Clinic waiting room"
                  className="w-full h-36 sm:h-32 md:h-40 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div
                className={`rounded-xl overflow-hidden ${rightInView ? 'animate-pop-in' : 'opacity-0'}`}
                style={rightInView ? { animationDelay: '100ms' } : {}}
              >
                <img
                  src="/images/cli2.png"
                  alt="Clinic examination room"
                  className="w-full h-44 sm:h-40 md:h-52 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Heading */}
            <div
              className={`mt-8 sm:mt-10 md:mt-16 ${rightInView ? 'animate-slide-up-bounce' : 'opacity-0'}`}
              style={rightInView ? { animationDelay: '200ms' } : {}}
            >
              <h2
                className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[48px] font-medium text-[#11181C] mb-4 sm:mb-5 md:mb-6 leading-[1.1] text-left"
                style={{ letterSpacing: '0.5%' }}
              >
                More Than a Clinic — We're Your Health Partner
              </h2>
            </div>

            {/* Paragraphs */}
            <div
              className={`${rightInView ? 'animate-slide-up-bounce' : 'opacity-0'}`}
              style={rightInView ? { animationDelay: '350ms' } : {}}
            >
              <p
                className="text-[16px] sm:text-[17px] md:text-[18px] leading-[26px] sm:leading-[28px] font-normal text-[#687076] mb-4 text-left"
                style={{ letterSpacing: '0.5%' }}
              >
                Located in the heart of Burbank, Western Neurological Associates has
                been serving the community for over 12 years with comprehensive
                neurological and sleep disorder care.
              </p>
              <p
                className="text-[16px] sm:text-[17px] md:text-[18px] leading-[26px] sm:leading-[28px] font-normal text-[#687076] mb-6 sm:mb-8 text-left"
                style={{ letterSpacing: '0.5%' }}
              >
                Western Neurological Associates, located in the heart of Burbank, has been serving the community for over 12 years with comprehensive neurological and sleep disorder care.
                With his extensive expertise, Dr. Faisal strives to provide quality care with compassion and individualized attention to every patient. We believe that providing patients with a full understanding of their condition and thorough education about their care is an essential part of our practice.
              </p>
            </div>

            {/* Button */}
            <div
              className={`${rightInView ? 'animate-pop-in' : 'opacity-0'}`}
              style={rightInView ? { animationDelay: '500ms' } : {}}
            >
              <a
                href="/about"
                className="inline-block bg-[#1299ED] hover:bg-blue-700 text-white font-medium px-5 sm:px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-0.5"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Moreclinis;
