import React from 'react';

const logos = [
  '/images/affone.png',
  '/images/afftwo.png',
  '/images/affthree.png',
  '/images/afffour.png',
  '/images/afffive.png',
  '/images/affsix.png',
  '/images/affseven.png',
  '/images/affeight.png',
  '/images/affnine.png',
  '/images/afften.png',
  '/images/affeleven.png',
  '/images/afftwelve.png',
];

const AffiliateInsurance = () => {
  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Affiliate Insurance
        </h2>

        {/* Subheading */}
        <p className="text-base md:text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Our physicians are affiliated with these local hospitals
        </p>

        {/* 12 logos in 3 rows (4 per row) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {logos.map((src, index) => (
            <div
              key={index}
              className="rounded-xl bg-white border border-gray-200 shadow-sm overflow-hidden flex items-center justify-center aspect-[2/1] min-h-[80px] p-4"
            >
              <img
                src={src}
                alt={`Affiliate ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliateInsurance;
