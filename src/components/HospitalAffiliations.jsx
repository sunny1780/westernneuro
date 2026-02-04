import React from "react";

const HospitalAffiliations = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Hospital Affiliations
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Our physicians maintain active privileges at:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {/* Providence St. Joseph Hospital */}
          <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-8 flex flex-col items-center justify-center min-h-[180px] border border-gray-100">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#e8f5e9] mb-4">
              <svg
                className="w-9 h-9 text-[#004F71]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
              </svg>
            </div>
            <p className="text-2xl font-bold text-[#004F71]">Providence</p>
            <p className="text-base md:text-lg text-[#004F71] mt-1">St. Joseph Hospital</p>
          </div>

          {/* UCLA Health */}
          <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-8 flex flex-col items-center justify-center min-h-[180px] border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="bg-[#2774AE] text-white px-4 py-2 rounded font-bold text-xl font-sans">
                UCLA
              </div>
              <p className="text-xl font-normal text-gray-900">Health</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalAffiliations;
