import React from "react";

const HospitalAffiliations = () => {
  return (
    <section className="bg-white py-14 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
          Hospital Affiliations
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-2xl mx-auto">
          Our physicians maintain active privileges at:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 justify-items-center">
          {/* Providence St. Joseph Hospital */}
          <div className="bg-white rounded-2xl shadow-[0_6px_18px_rgba(0,0,0,0.08)] p-3 flex items-center justify-center min-h-[145px] w-full sm:w-[280px] md:w-[320px] border border-gray-100">
            <img
              src="/images/providence.png"
              alt="Providence St. Joseph Hospital"
              className="h-28 md:h-32 w-auto object-contain"
            />
          </div>

          {/* UCLA Health */}
          <div className="bg-white rounded-2xl shadow-[0_6px_18px_rgba(0,0,0,0.08)] p-3 flex items-center justify-center min-h-[145px] w-full sm:w-[280px] md:w-[320px] border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="bg-[#2774AE] text-white px-7 py-3.5 rounded font-bold text-3xl font-sans">
                UCLA
              </div>
              <p className="text-3xl font-normal text-gray-900">Health</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalAffiliations;
