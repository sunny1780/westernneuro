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
    image: '/images/services/disorder3.jpg',
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
  <img src="/images/srow.svg" alt="" className="w-4 h-4 object-contain" />
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
      <div className="w-[298px] h-[152px] rounded-[17.59px] overflow-hidden bg-gray-100 flex-shrink-0 min-w-0">
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
            className="text-[36px] leading-[40px] font-normal text-[#006699]"
            style={{ letterSpacing: '0.5%' }}
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
        className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1299ED] hover:bg-[#0f80dd] text-white flex items-center justify-center transition"
        style={{ borderRadius: '12px' }}
        aria-label={`Learn more about ${service.title}`}
      >
        <ArrowIcon />
      </Link>
    </div>
  );
};

const Allservices = () => {
  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full space-y-8 text-left">
        <div className="text-center">
          <h2
            className="text-[48px] font-medium text-[#11181C] leading-[1]"
            style={{ letterSpacing: '0.5%' }}
          >
            Our Services
          </h2>
          <p
            className="text-[18px] leading-[28px] font-normal text-[#687076] mt-2"
            style={{ letterSpacing: '0.5%' }}
          >
            Our physicians provide Comprehensive Care
          </p>
        </div>
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Allservices;
