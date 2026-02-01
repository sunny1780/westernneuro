import React from 'react';

const FacilityHero = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#053759] mb-6">
          Facility Tour
        </h1>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis
        </p>
      </div>

      {/* Image Grid - 2 columns, 4 rows */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 px-4 sm:px-6">
        {['ft1', 'ft2', 'ft3', 'ft4', 'ft5', 'ft6', 'ft7', 'ft8'].map((name) => (
          <div key={name} className="rounded-xl overflow-hidden aspect-[4/3]">
            <img
              src={`/images/${name}.png`}
              alt={`Facility ${name}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacilityHero;
