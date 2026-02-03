import React from "react";
import { Link } from "react-router-dom";

const AboutDoctorFaisalHero = ({ doctorImage = "/images/dr-faisal-hero.png" }) => {
  return (
    <section
      className="min-h-screen text-left px-4 sm:px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
    >
      {/* Left column: content */}
      <div className="flex-1 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#053759] mb-1 leading-tight">
          Meet
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#053759] mb-4 md:mb-5 leading-tight">
          Dr. Fawaz Faisal
        </h1>
        <p className="text-[#687076] text-base md:text-lg mb-8 md:mb-10">
          Triple Board-Certified Neurological Expert
        </p>

        <Link
          to="/services"
          className="inline-block bg-[#007BFF] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#0069d9] transition mb-12 md:mb-16"
        >
          Explore Services
        </Link>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 md:gap-16">
          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#007BFF]">
              200+
            </p>
            <p className="text-sm md:text-base text-[#687076] mt-1">
              Successful Patient Outcomes
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#007BFF]">
              70K+
            </p>
            <p className="text-sm md:text-base text-[#687076] mt-1">
              Safe Prescriptions Managed
            </p>
          </div>
        </div>
      </div>

      {/* Right column: doctor image + backgrounds + card overlay */}
      <div className="flex-1 w-full max-w-lg lg:max-w-2xl relative flex justify-center lg:justify-end min-h-[420px] md:min-h-[520px]">
        <div className="relative w-full max-w-md h-[480px] md:h-[580px] rounded-2xl overflow-hidden">
          {/* Far left: faint light blue vertical stripe */}
          <div
            className="absolute left-0 top-0 w-[8%] h-full z-0"
            style={{ background: "linear-gradient(180deg, rgba(200,230,255,0.6) 0%, rgba(255,255,255,0.9) 100%)" }}
          />

          {/* Upper left / top: white / very light off-white */}
          <div
            className="absolute left-0 top-0 w-[50%] h-full z-0"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #F8FBFF 40%, rgba(232,244,252,0.5) 100%)",
            }}
          />

          {/* Bottom right: dark blue rounded rectangle (rounded top-left) */}
          <div
            className="absolute right-0 bottom-0 w-[58%] h-[85%] z-0 rounded-tl-[3rem]"
            style={{ backgroundColor: "#0F2C45" }}
          />

          {/* Doctor image - centered, overlaps both backgrounds */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <img
              src={doctorImage}
              alt="Dr. Fawaz Faisal"
              className="w-[78%] h-full object-cover object-top"
            />
          </div>

          {/* Info card - lower-middle, significantly rounded, floating shadow */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] px-5 py-4 flex items-center justify-between gap-4 max-w-[260px] min-w-[220px]">
            <div>
              <p className="font-bold text-gray-900 text-lg">Dr Faisal</p>
              <p className="text-sm text-gray-500">Specialist Doctor</p>
            </div>
            <Link
              to="/services"
              className="w-10 h-10 rounded-full bg-[#007BFF] flex items-center justify-center flex-shrink-0 hover:bg-[#0069d9] transition"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7h4V3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctorFaisalHero;
