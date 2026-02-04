import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Epilepsy',
    description: 'Expert care for epilepsy management with advanced diagnostics, personalized treatment plans, and ongoing support to help you achieve optimal seizure control and quality of life.',
    image: '/images/services/1.jpg',
    to: '/services/epilepsy',
  },
  {
    title: 'Headaches & Migraines',
    description: 'Specialized treatment for headaches and migraines using evidence-based approaches to reduce frequency, severity, and impact on your daily life.',
    image: '/images/services/head1.jpg',
    to: '/services/headaches',
  },
  {
    title: 'Neuromuscular Disorders',
    description: 'Specialized care for neuromuscular disorders using advanced EMG and nerve conduction studies for accurate diagnosis and targeted treatment.',
    image: '/images/services/disorder1.png',
    to: '/services/neuromuscular-disorders',
  },
  {
    title: 'Sleep Disorders',
    description: 'Expert diagnosis and treatment of sleep disorders, including sleep apnea, narcolepsy, and restless leg syndrome, through advanced sleep studies and personalized care.',
    image: '/images/services/sleep1.jpg',
    to: '/services/sleep-disorders',
  },
  {
    title: 'EEG Testing',
    description: 'State-of-the-art electroencephalogram testing performed by expert technicians with interpretation by our board-certified clinical neurophysiologist.',
    image: '/images/services/eeg1.png',
    to: '/services/epilepsy',
  },
];

const ArrowButton = () => (
  <div className="w-12 h-12 rounded-full bg-[#69B0E9] flex items-center justify-center flex-shrink-0">
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </div>
);

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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px', ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.threshold, options.rootMargin]);

  return [ref, isInView];
};

function InformedCards() {
  const [sectionRef, sectionInView] = useInView();

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24 px-4 sm:px-6 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3 ${
            sectionInView ? 'animate-slide-up-bounce' : 'opacity-0'
          }`}
        >
          Our Services
        </h2>
        <p
          className={`text-gray-600 text-base md:text-lg text-center mb-12 md:mb-16 max-w-2xl mx-auto ${
            sectionInView ? 'animate-slide-up-bounce' : 'opacity-0'
          }`}
          style={sectionInView ? { animationDelay: '100ms' } : {}}
        >
          Our physicians provide Comprehensive Care
        </p>

        {/* Service Cards */}
        <div className="divide-y divide-gray-200">
          {services.map((service, index) => (
            <Link
              key={service.to}
              to={service.to}
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 py-6 md:py-8 group block ${
                sectionInView
                  ? index % 2 === 0
                    ? 'animate-slide-in-right-bounce'
                    : 'animate-slide-in-left-bounce'
                  : 'opacity-0'
              }`}
              style={
                sectionInView
                  ? { animationDelay: `${200 + index * 120}ms` }
                  : {}
              }
            >
              {/* Image - Far Left */}
              <div className="w-full sm:w-40 md:w-48 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Title + Description - Right of image, heading above paragraph, left-aligned */}
              <div className="flex-1 min-w-0 text-left">
                <h3 className="text-lg md:text-xl font-bold text-[#154360] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Arrow Button - Far Right, vertically centered */}
              <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300 self-center sm:self-auto">
                <ArrowButton />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InformedCards;
