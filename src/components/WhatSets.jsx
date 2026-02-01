import React from "react";

const features = [
  {
    title: " Triple Board Certification",
    description:
      "Our Medical Director, Dr. Fawaz Faisal, holds triple board certification in Neurology, Clinical Neurophysiology, and Sleep Medicine, ensuring the highest level of specialized expertise for comprehensive patient care.",
  },
  {
    title: "Advanced Diagnostic Technology",
    description:
      "We utilize state-of-the-art diagnostic equipment, including EEG, EMG, and nerve conduction studies, to provide accurate assessments and develop effective treatment strategies for complex neurological conditions.",
  },
  {
    title: "Comprehensive Sleep Medicine",
    description:
      "As certified sleep specialists, we offer complete sleep disorder evaluation and treatment, including in-office sleep studies for narcolepsy, sleep apnea, and restless leg syndrome with expert analysis.",
  },
  {
    title: "Patient-Centered Approach",
    description:
      "We prioritize thorough patient education and individualized attention, ensuring every patient fully understands their condition and treatment options, fostering trust and better health outcomes with each visit.",
  },
  {
    title: " 12+ Years Serving Burbank",
    description:
      "With over a decade of dedicated service to the Burbank community, we've established ourselves as one of the leading neurology practices in the valley with a proven track record of excellence.",
  },
  {
    title: "Prestigious Academic Affiliations",
    description:
      "Our physicians serve as Assistant Clinical Professors at UCLA and maintain hospital privileges at Providence Saint Joseph, UCLA Medical Center, and Cedars-Sinai Medical Cente, bringing academic excellence to patient care.",
  },
];

const WhatSets = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#69B0E9] py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            Our strength lies in a strategic, flexible model that bridges
            healthcare professionals, startups, and global education exactly
            where it’s needed most.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-6 h-full flex flex-col"
            >
              <div className="flex items-start gap-3 mb-4">
                {/* Simple sparkle icon */}
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-500 text-lg">
                  ✨
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm md:text-[15px] leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSets;

