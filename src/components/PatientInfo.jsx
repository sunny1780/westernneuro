import React from 'react';

const PatientInfo = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Left: Title + description */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-24 text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#053759] leading-tight mb-4 md:mb-6">
        Patient Resources & Information 

        </h1>
        <p className="text-gray-500 text-base md:text-lg max-w-lg leading-relaxed">
        Everything You Need for Your Visit
        </p>
      </div>

      {/* Right: Image */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="w-full max-w-md rounded-2xl md:rounded-3xl overflow-hidden">
          <img
            src="/images/ptinfo.png"
            alt="Patient Information"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PatientInfo;
