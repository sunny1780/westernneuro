import React from 'react';

const Associations = () => {
  const logos = [
    { src: '/images/one.png', alt: 'American Board of Psychiatry and Neurology' },
    { src: '/images/two.png', alt: 'American Board of Sleep Medicine' },
    { src: '/images/three.png', alt: 'American Board of Clinical Neurophysiology' },
  ];

  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Associations
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Our physicians are affiliated with these local hospitals
        </p>

        {/* Logo cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center min-h-[140px]"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-24 w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Lorem ipsum text */}
        <p className="text-gray-600 text-left max-w-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </section>
  );
};

export default Associations;
