import React from 'react';

const WestLogos = () => {
  const logos = [
    { src: '/images/one.png', alt: 'American Board of Psychiatry and Neurology' },
    { src: '/images/two.png', alt: 'American Board of Sleep Medicine' },
    { src: '/images/three.png', alt: 'American Board of Clinical Neurophysiology' },
  ];

  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};

export default WestLogos;
