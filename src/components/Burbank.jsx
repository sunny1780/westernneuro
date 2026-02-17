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

const Burbank = () => {
  const [textRef, textInView] = useInView();
  const [imageRef, imageInView] = useInView();
  const [logosRef, logosInView] = useInView();

  return (
    <section id="burbank" className="bg-white pt-12 md:pt-20 pb-6 md:pb-8 px-4 sm:px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Text Content */}
          <div
            ref={textRef}
            className={`text-left ${textInView ? 'animate-slide-up-bounce' : 'opacity-0'}`}
          >
            <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-medium text-[#11181C] leading-[1] mb-6" style={{ letterSpacing: '0.5%' }}>
            Burbank's
            <br />
            Neurology Expert
          </h2>
            <p className="text-gray-600 mb-4">
              Our Medical Director, Dr. Fawaz Faisal, is triple board-certified in Neurology, Clinical Neurophysiology, and Sleep Medicine.
            </p>
            <p className="text-gray-600 mb-4">
              He has established Western Neurological Associates as one of the leading neurology practices in the valley.
            </p>
            {/* <p className="text-gray-600 mb-8">
              Along with his extensive expertise, Dr. Faisal strives to provide quality care with compassion and individualized attention to every patient. We believe that providing patients with a full understanding of their condition and thorough education about their care is an essential part of our practice.
            </p> */}
            <a
              href="/about/doctor-faisal"
              className="inline-block bg-[#1299ED] hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-0.5"
            >
              Read More About Dr Fawaz
            </a>
          </div>

          {/* Right - Doctor Image */}
          <div
            ref={imageRef}
            className={`flex justify-center lg:justify-end ${imageInView ? 'animate-slide-in-right-bounce' : 'opacity-0'}`}
            style={imageInView ? { animationDelay: '150ms' } : {}}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md w-full group hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/images/Doc.png"
                alt="Dr Fawaz - Burbank Neurology Expert"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

      {/* Bottom - Certification Logos (1 row on desktop, 2x2 grid on mobile) */}
<div
  ref={logosRef}
  className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-12"
>
  {[
    { src: '/images/three.png', alt: 'American Board of Psychiatry and Neurology' },
    { src: '/images/two.png', alt: 'American Board of Sleep Medicine' },
    { src: '/images/one.png', alt: 'American Board of Clinical Neurophysiology' },
    { src: '/images/thee.png', alt: 'American Board of Clinical Neurophysiology' },
  ].map((logo, i) => (
    <div
      key={i}
      className={`bg-white rounded-xl shadow-md p-4 flex items-center justify-center min-h-[140px] ${
        logosInView ? 'animate-pop-in' : 'opacity-0'
      }`}
      style={{
        animationDelay: logosInView ? `${i * 120}ms` : '0ms',
      }}
    >
      <img
        src={logo.src}
        alt={logo.alt}
        className="max-h-48 w-auto object-contain shadow-none filter-none"
        style={{ boxShadow: 'none' }}
      />
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Burbank;
