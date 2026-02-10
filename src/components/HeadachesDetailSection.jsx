import React, { useEffect, useRef, useState } from "react";

const HeadachesDetailSection = ({ animate = true }) => {
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
      className="relative px-4 sm:px-6 py-12 md:py-16 overflow-x-hidden text-left"
    >
      <img
        src="/images/Neuro2.png"
        alt=""
        className="pointer-events-none select-none absolute right-0 top-24 w-[260px] sm:w-[320px] md:w-[420px] z-0"
      />
      <div
        className={`relative max-w-6xl mx-auto space-y-6 md:space-y-8 text-left ${
          inView ? "animate-slide-up-bounce" : "opacity-0"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#11181C] leading-tight">
          Advanced Diagnosis and Long-Term Relief for Chronic Headache Conditions
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          Headaches are among the most common neurological complaints and can range from mild and occasional to chronic and disabling. When headaches become frequent, severe, or resistant to standard treatments, specialized neurological care is essential.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          Headache pain may involve the head, face, neck, or upper shoulders and is often accompanied by symptoms such as nausea, vomiting, light or sound sensitivity, visual disturbances, dizziness, or extreme fatigue. Pain typically results from irritation of nerves, muscles, and blood vessels surrounding the brain and skull.
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#11181C] pt-2">
          Impact on Daily Life
        </h3>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          Chronic headaches and migraines can significantly interfere with:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg leading-relaxed text-[#687076] pl-2">
          <li>Work productivity and cognitive performance</li>
          <li>Sleep quality and energy levels</li>
          <li>Daily routines, family responsibilities, and social activities</li>
        </ul>
        <h3 className="text-xl sm:text-2xl font-bold text-[#11181C] pt-6">
          Types of Headaches We Diagnose and Treat
        </h3>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          Each headache disorder has distinct characteristics and requires a targeted treatment approach. We specialize in diagnosing and managing:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg leading-relaxed text-[#687076] pl-2">
          <li>Tension-type headaches, pressure-like pain, often related to stress or muscle tension</li>
          <li>Migraines, recurrent, often severe headaches with neurological symptoms</li>
          <li>Cluster headaches, intense, short-lasting headaches occurring in cyclical patterns</li>
          <li>Secondary headaches, headaches caused by underlying medical or neurological conditions</li>
        </ul>
      </div>
    </section>
  );
};

export default HeadachesDetailSection;
