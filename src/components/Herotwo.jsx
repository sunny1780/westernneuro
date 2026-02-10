import React from 'react';

const Herotwo = () => {
  return (
    <section
      className="w-full py-4 md:py-5"
      style={{ backgroundColor: '#E6F3FF' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        {/* Left: label + logos */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-6 w-full">
          <span
            className="text-[36px] leading-[40px] font-bold text-[#0A8DDB] whitespace-nowrap"
            style={{ letterSpacing: '0.5%' }}
          >
            As Seen On:
          </span>
          <img
            src="/images/alllogos.png"
            alt="Media logos - ABC, KTLA, CNBC, NBC, MTV"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>

        {/* Right: button */}
        <div className="w-full md:w-auto flex justify-start md:justify-end">
          <a
            href="https://www.youtube.com/user/westernneuro"
            className="inline-flex items-center justify-center bg-[#1299ED] hover:bg-[#0f80dd] text-white font-medium px-6 md:px-8 py-2.5 rounded-xl text-sm md:text-base transition whitespace-nowrap"
          >
            View All Interviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Herotwo;
