import React from 'react';
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
      'Expert diagnosis and treatment of sleep disorders, including sleep apnea, narcolepsy, and restless leg syndrome, through detailed sleep studies and personalized care.',
    image: '/images/services/sleep1.jpg',
    link: '/services/sleep-disorders',
  },
  {
    title: 'EEG Testing',
    description:
      'State-of-the-art electroencephalogram testing performed by expert technicians with interpretation by our board-certified clinical neurophysiologists.',
    image: '/images/services/eeg1.png',
    link: '/services/nerve-conduction-studies',
  },
];

const Servicesall = () => {
  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-6 text-left">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white rounded-xl border border-gray-200 shadow-sm p-4 sm:p-5"
          >
            <div className="w-full sm:w-44 h-28 sm:h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 text-left">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                {service.title}
              </h3>
              <p
                className={`text-sm mb-3 leading-relaxed ${
                  service.title === 'Epilepsy' ? '' : 'text-gray-600'
                }`}
                style={service.title === 'Epilepsy' ? { color: '#222F31' } : undefined}
              >
                {service.description}
              </p>
              <Link
                to={service.link}
                className="inline-flex items-center gap-2 bg-[#1893FF] hover:bg-[#0f80dd] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-3 rounded-md shadow-sm transition"
              >
                Learn More
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14m0 0l-4-4m4 4l-4 4"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicesall;
