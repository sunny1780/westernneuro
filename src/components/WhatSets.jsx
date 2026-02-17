import React, { useRef, useState, useEffect } from "react";

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

const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px", ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.threshold, options.rootMargin]);

  return [ref, isInView];
};

const WhatSets = () => {
  const [sectionRef, sectionInView] = useInView();

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #FFFFFF, #69B0E9)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2
            className={`text-[48px] font-medium text-[#11181C] leading-[1] mb-4 ${
              sectionInView ? "animate-slide-up-bounce" : "opacity-0"
            }`}
            style={{ letterSpacing: '0.5%' }}
          >
            What Sets Us Apart
          </h2>
          <p
            className={`text-base md:text-lg text-gray-700 ${
              sectionInView ? "animate-slide-up-bounce" : "opacity-0"
            }`}
            style={sectionInView ? { animationDelay: "100ms" } : {}}
          >
            Our strength lies in delivering expert neurological care with compassion,
            advanced diagnostics, and personalized treatment plans tailored to each
            patient's unique needs.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md border border-gray-100 p-6 h-full flex flex-col items-start justify-center text-left transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 ${
                sectionInView ? "animate-pop-in" : "opacity-0"
              }`}
              style={
                sectionInView
                  ? { animationDelay: `${200 + index * 80}ms` }
                  : {}
              }
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50">
                  <img
                    src="/images/staricon.svg"
                    alt=""
                    className="w-4 h-4 object-contain"
                  />
                </div>
                <h3
                  className="text-[15px] leading-[28px] font-medium text-[#11181C]"
                  style={{ letterSpacing: '0.5%' }}
                >
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
