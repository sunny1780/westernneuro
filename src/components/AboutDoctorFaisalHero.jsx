import React from "react";
import { Link } from "react-router-dom";

const AboutDoctorFaisalHero = ({ doctorImage }) => {
  return (
    <section
      className="min-h-screen text-left px-4 sm:px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
      style={{  }}
    >
      {/* Left column: content */}
      <div className="flex-1 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#053759] mb-3 md:mb-4 leading-tight">
          Meet
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#053759] mb-3 md:mb-4 leading-tight">
          Dr. Fawaz Faisal
        </h1>
        <p className="text-[#687076] text-base md:text-lg mb-8 md:mb-10">
          Triple Board-Certified Neurological Expert
        </p>

        <Link
          to="/services"
          className="inline-block bg-[#007bff] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#0069d9] transition mb-12 md:mb-16"
        >
          Explore Services
        </Link>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 md:gap-16">
          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#053759]">
              200+
            </p>
            <p className="text-sm md:text-base text-[#053759] mt-1">
              Successful Patient Outcomes
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#053759]">
              70K+
            </p>
            <p className="text-sm md:text-base text-[#053759] mt-1">
              Safe Prescriptions Managed
            </p>
          </div>
        </div>
      </div>

      {/* Right column: image + blue block + card overlay */}
      <div className="flex-1 w-full max-w-lg lg:max-w-xl relative flex justify-center lg:justify-end">
        {/* Dark blue background block */}
        <div
          className="w-full max-w-md aspect-[3/4] rounded-2xl relative overflow-hidden"
          style={{ backgroundColor: "#16395e" }}
        >
          {/* Doctor image placeholder or prop */}
          {doctorImage ? (
            <img
              src={doctorImage}
              alt="Dr. Fawaz Faisal"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[#16395e]">
              <div className="w-32 h-40 rounded-lg bg-gray-600/50 flex items-center justify-center text-[#cccccc] text-sm">
                Dr. Faisal
              </div>
            </div>
          )}

          {/* White info card overlay */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] max-w-[280px] bg-white rounded-xl shadow-lg p-4 flex items-center justify-between gap-3">
            <div>
              <p className="font-bold text-gray-900 text-lg">Dr Faisal</p>
              <p className="text-sm text-gray-500">Specialist Doctor</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#007bff] flex items-center justify-center flex-shrink-0">
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
                  d="M7 17L17 7M17 7H7M17 7v10"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctorFaisalHero;
