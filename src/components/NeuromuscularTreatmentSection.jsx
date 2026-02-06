import React, { useEffect, useRef, useState } from "react";

const NeuromuscularTreatmentSection = ({
  animate = true,
  image = "/images/muscles.png",
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
            Our Diagnostic and Treatment Approach for Neuromuscular Disorders
          </h2>
          <p className="text-base md:text-lg text-[#687076] leading-relaxed">
            Dr. Faisal provides a comprehensive neuromuscular evaluation using advanced neurophysiological testing combined with a detailed clinical assessment to identify the precise cause of symptoms.
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-[#11181C]">
            Diagnostic Evaluation Includes:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-[#687076] leading-relaxed pl-2">
            <li>Electromyography (EMG) to evaluate muscle electrical activity</li>
            <li>Nerve conduction studies to assess nerve signal transmission</li>
            <li>Detailed neurological examination and symptom analysis</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-bold text-[#11181C] pt-2">
            Treatment Strategies May Include:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-[#687076] leading-relaxed pl-2">
            <li>Individualized medication management</li>
            <li>Referrals for physical or occupational therapy</li>
            <li>Ergonomic and lifestyle modifications to reduce symptom progression</li>
            <li>Ongoing monitoring to preserve strength, mobility, and independence</li>
          </ul>
        </div>

        {/* Image */}
        <div
          className="w-full overflow-hidden rounded-xl"
          style={{ aspectRatio: "1280/442", maxWidth: "100%" }}
        >
          <img
            src={image}
            alt="Muscle anatomy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default NeuromuscularTreatmentSection;
