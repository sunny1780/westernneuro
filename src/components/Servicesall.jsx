import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Epilepsy',
    description:
      'Expert care for epilepsy management with advanced diagnostics, personalized treatment plans, and ongoing support to help you achieve optimal seizure control and quality of life.',
    image: '/images/services/1.jpg',
    link: '/services/epilepsy',
  },
  {
    title: 'Headaches & Migraines',
    description:
      'Specialized treatment for headaches and migraines using evidence-based approaches to reduce frequency, severity, and impact on your daily life.',
    image: '/images/services/head1.jpg',
    link: '/services/headaches',
  },
  {
    title: 'Neuromuscular Disorders',
    description:
      'Specialized care for neuromuscular disorders using advanced EMG and nerve conduction studies for accurate diagnosis and targeted treatment.',
    image: '/images/services/disorder1.png',
    link: '/services/neuromuscular-disorders',
  },
  {
    title: 'Sleep Disorders',
    description:
      'Expert diagnosis and treatment of sleep disorders, including sleep apnea, narcolepsy, and restless leg syndrome, through advanced sleep studies and personalized care.',
    image: '/images/services/sleep1.jpg',
    link: '/services/sleep-disorders',
  },
  {
    title: 'EEG Testing',
    description:
      'State-of-the-art electroencephalogram testing performed by expert technicians with interpretation by our board-certified clinical neurophysiologist.',
    image: '/images/services/eeg1.png',
    link: '/services/nerve-conduction-studies',
  },
];

const ArrowIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 items-start sm:items-center p-4 sm:p-5 lg:p-6 bg-white rounded-xl shadow-sm border-b border-gray-200 last:border-b-0 overflow-hidden ${
        isVisible ? 'animate-slide-in-right-bounce' : 'opacity-0'
      }`}
      style={isVisible ? { animationDelay: `${index * 60}ms` } : {}}
    >
            {/* Image */}
            <div className="w-full sm:w-36 md:w-40 lg:w-48 aspect-[1.8] rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 min-w-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title + Description - responsive layout */}
            <div className="flex-1 min-w-0 flex flex-col lg:flex-row gap-3 lg:gap-6 items-start lg:items-center w-full">
              <div className="w-full lg:max-w-[300px] lg:flex-shrink-0">
                <h3
                  className="text-lg sm:text-xl lg:text-2xl font-bold"
                  style={{ color: '#006699' }}
                >
                  {service.title}
                </h3>
              </div>
              <div className="w-full lg:max-w-[462px] min-w-0">
                <p
                  className="text-sm sm:text-base leading-relaxed break-words"
                  style={{ color: '#687076' }}
                >
                  {service.description}
                </p>
              </div>
            </div>

            {/* Button - vertically centered */}
            <Link
              to={service.link}
              className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#00BFFF] hover:bg-[#00a3e0] text-white flex items-center justify-center transition"
              style={{ borderRadius: '12px' }}
              aria-label={`Learn more about ${service.title}`}
            >
              <ArrowIcon />
            </Link>
    </div>
  );
};

const Servicesall = () => {
  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full space-y-0 text-left">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Servicesall;
