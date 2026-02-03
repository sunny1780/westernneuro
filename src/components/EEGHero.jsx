import React, { useEffect, useRef, useState } from 'react';

const EEGHero = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const [imageVisible, setImageVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const targets = [imageRef.current, textRef.current].filter(Boolean);
    if (!targets.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) setImageVisible(true);
            if (entry.target === textRef.current) setTextVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    targets.forEach((t) => t && observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-16 overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
        <div
          ref={imageRef}
          className={`w-full max-w-full md:max-w-[520px] rounded-2xl overflow-hidden bg-gray-100 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}
        >
          <img
            src="/images/cizer.png"
            alt="EEG testing"
            className="w-full h-auto object-cover"
          />
        </div>
        <div
          ref={textRef}
          className={`text-left transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] delay-150 ${
            textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#053759] mb-4">
            EEG Testing
          </h1>
          <p className="text-[#687076] leading-relaxed">
            State-of-the-art electroencephalogram testing performed by expert technicians
            with interpretation by our board-certified clinical neurophysiologist.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EEGHero;
