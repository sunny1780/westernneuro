import React, { useEffect, useRef, useState } from "react";

const NeuromuscularDetailSection = ({ animate = true }) => {
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
          Comprehensive Evaluation and Treatment for Neuromuscular Disorders
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          Neuromuscular disorders are a group of neurological conditions that affect the <strong>peripheral nervous system</strong>, including the nerves, muscles, and neuromuscular junctions responsible for voluntary movement, strength, and sensation. These conditions may develop gradually over time or appear suddenly, often leading to progressive weakness, sensory disturbances, pain, or impaired coordination.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          Because neuromuscular symptoms frequently overlap across multiple conditions, accurate diagnosis requires specialized neurological expertise and advanced diagnostic testing. Early identification and targeted treatment are critical to slowing disease progression, preserving function, and improving long-term quality of life.
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#11181C] pt-2">
          Key Clinical Features of Neuromuscular Disorders
        </h3>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          Neuromuscular conditions can affect one or multiple parts of the nervous system and may present with a wide range of symptoms, including:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg leading-relaxed text-[#687076] pl-2">
          <li>Muscle weakness or fatigue affecting daily activities</li>
          <li>Numbness, tingling, burning, or loss of sensation</li>
          <li>Muscle cramping, stiffness, or involuntary twitching</li>
          <li>Pain, balance problems, or difficulty with coordination</li>
          <li>Reduced reflexes or abnormal muscle tone</li>
        </ul>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          Symptoms may be localized or widespread and can progress slowly or worsen rapidly depending on the underlying condition. Because similar symptoms may arise from different causes, expert neurological evaluation is essential to determine the exact source of dysfunction.
        </p>

        {/* Types and Causes */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#11181C] leading-tight pt-8 md:pt-12">
          Types and Causes of Neuromuscular Disorders
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          Neuromuscular disorders are broadly classified based on whether the primary problem originates in the nerve, muscle, or nerve-to-muscle connection. Identifying the specific category is crucial for selecting effective treatment and determining prognosis.
        </p>

        <h3 className="text-xl sm:text-2xl font-bold text-[#11181C] pt-4">
          Peripheral Nerve Disorders
        </h3>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          These conditions result from damage or dysfunction of peripheral nerves, which transmit signals between the brain, spinal cord, and muscles. Common causes include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg leading-relaxed text-[#687076] pl-2">
          <li>Peripheral neuropathy related to diabetes, metabolic disorders, or nutritional deficiencies</li>
          <li>Nerve compression syndromes such as carpal tunnel syndrome</li>
          <li>Radiculopathy caused by spinal disc disease or nerve root compression</li>
        </ul>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          Symptoms often include numbness, tingling, pain, weakness, or loss of coordination.
        </p>

        <h3 className="text-xl sm:text-2xl font-bold text-[#11181C] pt-6">
          Muscle and Neuromuscular Junction Disorders
        </h3>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          These conditions primarily affect muscle tissue or the connection between nerves and muscles. Examples include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg leading-relaxed text-[#687076] pl-2">
          <li>Myopathies involving muscle inflammation, degeneration, or genetic abnormalities</li>
          <li>Neuromuscular junction disorders causing impaired signal transmission</li>
          <li>Conditions leading to muscle fatigue, weakness, or loss of endurance</li>
        </ul>
      </div>
    </section>
  );
};

export default NeuromuscularDetailSection;
