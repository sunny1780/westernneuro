import React from "react";

const HospitalAffiliations = () => {
  return (
    <section className="bg-white py-6 md:py-10 px-4 sm:px-4 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[48px] font-medium text-[#11181C] leading-[1] mb-2" style={{ letterSpacing: '0.5%' }}>
          Hospital Affiliations
        </h2>
        <p
          className="text-[16px] leading-[24px] font-normal text-[#5A666E] mb-8 max-w-2xl mx-auto"
          style={{ letterSpacing: '0.5%' }}
        >
          Our physicians maintain active privileges at:
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
          {/* Left image */}
          <div className="flex items-center justify-center">
            <img
              src="/images/left.png"
              alt="Hospital affiliation logo"
              className="h-32 md:h-40 w-auto object-contain"
            />
          </div>

          {/* Right image */}
          <div className="flex items-center justify-center">
            <img
              src="/images/right.png"
              alt="Hospital affiliation logo"
              className="h-32 md:h-40 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalAffiliations;
