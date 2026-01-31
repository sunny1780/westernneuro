import React from 'react';

const PatientInfo = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Left: Title + description */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-24 text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#053759] leading-tight mb-4 md:mb-6">
          Patient
          <br />
          Information
        </h1>
        <p className="text-gray-500 text-base md:text-lg max-w-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </div>

      {/* Right: Large light gray form container */}
      <div className="flex-1 flex items-center p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="w-full rounded-2xl md:rounded-3xl bg-gray-100 min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px]" />
      </div>
    </section>
  );
};

export default PatientInfo;
