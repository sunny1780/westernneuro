import React, { useEffect, useRef, useState } from "react";

const SleepTreatmentSection = ({
  animate = true,
  image = "/images/services/sleep3.jpg",
}) => {
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
      className="px-4 sm:px-6 md:px-16 py-12 md:py-16 text-left overflow-x-hidden"
    >
      <div
        className={`max-w-6xl mx-auto flex flex-col gap-8 md:gap-12 ${
          inView ? "animate-slide-up-bounce" : "opacity-0"
        }`}
      >
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#11181C]">
            Our Diagnostic and Treatment Approach for Sleep Disorders
          </h2>
          <p className="text-base md:text-lg text-[#687076] leading-relaxed">
            Dr. Faisal offers comprehensive sleep evaluations focused on identifying sleep patterns, neurological contributors, and related medical conditions.
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-[#11181C]">
            Diagnostic Evaluation Includes:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-[#687076] leading-relaxed pl-2">
            <li>Detailed sleep history and neurological examination</li>
            <li>Coordination of sleep studies when clinically indicated</li>
            <li>Assessment of contributing lifestyle, medical, and neurological factors</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-bold text-[#11181C] pt-2">
            Treatment Strategies May Include:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-[#687076] leading-relaxed pl-2">
            <li>Individualized medical therapy</li>
            <li>Behavioral and lifestyle counseling</li>
            <li>Long-term management plans to improve sleep quality and daytime function</li>
          </ul>
        </div>

        {/* Image */}
        <div
          className="w-full overflow-hidden rounded-xl"
          style={{ aspectRatio: "1280/442", maxWidth: "100%" }}
        >
          <img
            src={image}
            alt="Sleep evaluation"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SleepTreatmentSection;
