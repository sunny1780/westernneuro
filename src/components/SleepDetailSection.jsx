import React, { useEffect, useRef, useState } from "react";

const SleepDetailSection = ({ animate = true }) => {
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
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23053759' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div
        className={`relative max-w-6xl mx-auto space-y-6 md:space-y-8 text-left ${
          inView ? "animate-slide-up-bounce" : "opacity-0"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#11181C] leading-tight">
          Comprehensive Evaluation and Treatment for Healthy Sleep and Brain Function
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          Sleep disorders are neurological conditions that disrupt normal sleep-wake cycles and interfere with the brain's ability to achieve restorative rest. Healthy sleep is essential for cognitive function, emotional regulation, memory consolidation, and physical health, and chronic sleep disturbances can significantly affect overall well-being.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          Sleep disorders often go undiagnosed for years, contributing to daytime fatigue, impaired concentration, mood changes, and increased risk of cardiovascular and metabolic disease. Accurate diagnosis and individualized treatment are essential for restoring healthy sleep patterns.
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#11181C] pt-2">
          Key Clinical Features of Sleep Disorders
        </h3>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          Sleep-related neurological conditions may present with a wide range of symptoms, including:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg leading-relaxed text-[#687076] pl-2">
          <li>Excessive daytime sleepiness or sudden sleep attacks</li>
          <li>Difficulty falling asleep or staying asleep</li>
          <li>Loud snoring, gasping, or breathing pauses during sleep</li>
          <li>Restlessness, uncomfortable sensations, or involuntary movements at night</li>
          <li>Morning headaches, poor concentration, or memory problems</li>
        </ul>

        {/* Types and Causes */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#11181C] leading-tight pt-8 md:pt-12">
          Types and Causes of Sleep Disorders
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          Sleep disorders are classified based on disruptions in sleep regulation, breathing, or movement during sleep. Understanding the specific disorder allows for targeted treatment and improved outcomes.
        </p>

        <h3 className="text-xl sm:text-2xl font-bold text-[#11181C] pt-4">
          Neurological Sleep Disorders
        </h3>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          These conditions involve abnormal regulation of sleep-wake cycles.
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg leading-relaxed text-[#687076] pl-2">
          <li>Narcolepsy, characterized by excessive daytime sleepiness and sudden sleep episodes</li>
          <li>Disorders affecting circadian rhythm regulation</li>
        </ul>

        <h3 className="text-xl sm:text-2xl font-bold text-[#11181C] pt-6">
          Sleep-Related Movement and Breathing Disorders
        </h3>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          These disorders disrupt sleep quality and oxygen delivery.
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg leading-relaxed text-[#687076] pl-2">
          <li>Restless Leg Syndrome, causing uncomfortable sensations and an urge to move the legs</li>
          <li>Sleep apnea, marked by repeated breathing interruptions during sleep, increases cardiovascular risk</li>
          <li>Chronic insomnia and related sleep disturbances</li>
        </ul>
      </div>
    </section>
  );
};

export default SleepDetailSection;
