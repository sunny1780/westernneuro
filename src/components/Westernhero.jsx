import React from 'react';

const Westernhero = () => {
  return (
    <section className="bg-white py-12 md:py-20 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Text Content */}
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#053759] leading-tight mb-6">
            Leading Burbank's 
              <br />
              Neurological Excellence
              <br />
              Since 2010 
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-lg leading-relaxed">
            Where Advanced Medicine Meets Compassionate Care
            </p>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/west.png"
                alt="Western Neurological Associates - Western Sleep Center"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Westernhero;
