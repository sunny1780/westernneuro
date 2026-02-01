import React from 'react';

const Herotwo = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] h-[209px]">
        {/* Left - Faisal Image with gradient fade to black */}
        <div className="relative h-full">
          <img
            src="/images/faisal.png"
            alt="Faisal"
            className="absolute inset-0 w-full h-full object-cover object-left"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, transparent 40%, rgba(0,0,0,0.6) 70%, black)',
            }}
          />
        </div>

        {/* Right - Black section with As Seen On */}
        <div className="bg-black flex items-center justify-center px-6 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full max-w-4xl">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#1893FF] mb-4 md:mb-6">
                As Seen On
              </h2>
              <img
                src="/images/logos.png"
                alt="Media logos - ABC, KTLA, CNBC, NBC, MTV"
                className="max-h-12 md:max-h-14 w-auto mx-auto md:mx-0 object-contain"
              />
            </div>
            <a
              href="/"
              className="inline-flex items-center justify-center bg-[#1893FF] hover:bg-[#0f80dd] text-white font-medium px-6 py-3 rounded-lg transition whitespace-nowrap shrink-0"
            >
              View All Interviews
            </a>
          </div>
        </div>
      </div>

      {/* Blue line at bottom */}
      <div
        className="w-full h-1"
        style={{ backgroundColor: '#1893FF' }}
      />
    </section>
  );
};

export default Herotwo;
