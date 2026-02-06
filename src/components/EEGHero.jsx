import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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
          className={`w-full max-w-full md:max-w-[520px] rounded-2xl overflow-hidden bg-gray-100 ${
            imageVisible ? 'animate-slide-in-left-bounce' : 'opacity-0'
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
          className={`text-left ${textVisible ? 'animate-slide-in-right-bounce' : 'opacity-0'}`}
          style={textVisible ? { animationDelay: '150ms' } : {}}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#053759] mb-4">
            EEG Testing
          </h1>
          <p className="text-[#687076] leading-relaxed mb-6">
            State-of-the-art electroencephalogram testing performed by expert technicians
            with interpretation by our board-certified clinical neurophysiologist.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white bg-[#1893FF] hover:bg-[#0f80dd] transition"
            >
              Schedule Appointment
            </Link>
            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-[#1893FF] border-2 border-[#1893FF] bg-white hover:bg-[#f8fbff] transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EEGHero;
