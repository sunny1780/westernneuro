import React, { useEffect, useRef, useState } from "react";

const HeadachesTreatmentSection = ({ animate = true, image = "/images/services/head3.png" }) => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(!animate);

  useEffect(() => {
    if (!animate || !sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <section
      ref={sectionRef}
      className="relative px-4 sm:px-6 md:px-16 py-12 md:py-16 text-left overflow-x-hidden"
    >
      <img
        src="/images/Neuro1.png"
        alt=""
        className="pointer-events-none select-none absolute left-0 top-80 w-[260px] sm:w-[320px] md:w-[420px] z-0"
      />
      <div
        className={`max-w-6xl mx-auto flex flex-col gap-8 md:gap-12 ${
          inView ? "animate-slide-up-bounce" : "opacity-0"
        }`}
      >
        {/* Image */}
        <div
          className="w-full overflow-hidden rounded-xl bg-gray-900"
          style={{ aspectRatio: "1280/442", maxWidth: "100%" }}
        >
          <img
            src={image}
            alt="Headache treatment"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#11181C]">
            Our Headache Treatment Approach
          </h2>
          <p className="text-base md:text-lg text-[#687076] leading-relaxed">
            Dr. Faisal conducts comprehensive evaluations that include detailed headache histories, neurological examinations, and identification of patterns and triggers.
          </p>
          <p className="text-base md:text-lg text-[#687076] leading-relaxed">
            Treatment options may include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-[#687076] leading-relaxed pl-2">
            <li>Preventive medications to reduce headache frequency and severity</li>
            <li>Acute therapies for rapid symptom relief</li>
            <li>Lifestyle and trigger management counseling</li>
            <li>Advanced therapies for chronic or treatment-resistant headache disorders</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeadachesTreatmentSection;
