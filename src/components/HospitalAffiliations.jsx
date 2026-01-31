import React from 'react';

const HospitalAffiliations = ({ images = [] }) => {
  // Placeholder: pass image URLs as props, or use defaults for demo
  const boxes = images.length >= 4 
    ? images.slice(0, 4) 
    : [...Array(4)].map((_, i) => images[i] || null);

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Hospital Affiliations
        </h2>

        {/* Subheading */}
        <p className="text-base md:text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Our physicians are affiliated with these local hospitals
        </p>

        {/* Four image boxes in a row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {boxes.map((src, index) => (
            <div
              key={index}
              className="aspect-[2/1] rounded-lg bg-gray-200 overflow-hidden flex items-center justify-center"
            >
              {src ? (
                <img
                  src={src}
                  alt={`Affiliate hospital ${index + 1}`}
                  className="w-full h-full object-contain p-2"
                />
              ) : (
                <span className="text-gray-400 text-sm">Logo</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalAffiliations;
