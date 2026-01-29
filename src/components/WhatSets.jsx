import React from "react";

const features = [
  {
    title: "Comprehensive Service Offering",
    description:
      "To assist with compliance, product development, and operations, we link our clients with reputable medical consultants and healthcare IT specialists. Perfect for clinics, startups, or anyone looking for strategic advice on healthcare.",
  },
  {
    title: "Strategic Healthcare Partnerships",
    description:
      "We build bridges between healthcare professionals, startups, and global education partners so that innovation reaches the people and places where it’s needed most.",
  },
  {
    title: "Expert Compliance Guidance",
    description:
      "Navigate complex healthcare regulations with confidence. Our network of consultants helps ensure your products and operations stay aligned with the latest standards.",
  },
  {
    title: "Flexible Engagement Model",
    description:
      "Whether you’re an early‑stage startup or an established organization, our flexible engagement options adapt to your pace, resources, and goals.",
  },
  {
    title: "Technology & IT Specialists",
    description:
      "Tap into experienced healthcare IT specialists for product architecture, integrations, data flows, and secure infrastructure tailored to your use case.",
  },
  {
    title: "Global Perspective, Local Impact",
    description:
      "We blend global best practices with local healthcare context so your solutions are practical, scalable, and patient‑centric.",
  },
];

const WhatSets = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#69B0E9] py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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

