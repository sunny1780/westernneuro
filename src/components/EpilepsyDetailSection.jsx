import React, { useEffect, useRef, useState } from "react";

const EpilepsyDetailSection = ({ animate = true }) => {
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
        className="pointer-events-none select-none absolute right-0 top-32 sm:top-44 w-[200px] sm:w-[280px] md:w-[360px] lg:w-[420px] z-0 opacity-60 sm:opacity-100"
      />
      <div
        className={`relative max-w-6xl mx-auto space-y-6 md:space-y-8 text-left ${
          inView ? "animate-slide-up-bounce" : "opacity-0"
        }`}
      >
        <h2
          className="text-[22px] sm:text-[26px] md:text-[30px] font-semibold text-[#11181C] leading-[28px] sm:leading-[32px] md:leading-[36px]"
          style={{ letterSpacing: '0.5%', fontFamily: 'Inter, sans-serif' }}
        >
          Comprehensive Seizure Disorder Diagnosis and Treatment
        </h2>
        <h3
          className="text-[17px] sm:text-[20px] font-bold text-[#11181C] leading-[24px] sm:leading-[28px]"
          style={{ letterSpacing: '0.5%', fontFamily: 'Inter, sans-serif' }}
        >
          Expert Evaluation and Personalized Care for Epilepsy
        </h3>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          Epilepsy is a chronic neurological disorder marked by recurrent,
          unprovoked seizures resulting from abnormal electrical discharges in
          the brain. While a single seizure episode can occur due to temporary
          factors such as fever, infection, or metabolic imbalance, epilepsy is
          diagnosed only when there is an ongoing tendency for repeated
          seizures.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          Because epilepsy is a highly individualized condition, varying widely
          in seizure type, frequency, triggers, and response to treatment,
          accurate diagnosis and tailored management are essential to achieving
          long-term seizure control and preserving quality of life.
        </p>
        <h3
          className="text-[17px] sm:text-[20px] font-bold text-[#11181C] leading-[24px] sm:leading-[28px] pt-2"
          style={{ letterSpacing: '0.5%', fontFamily: 'Inter, sans-serif' }}
        >
          Key Clinical Features of Epilepsy
        </h3>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          Epilepsy may present in many forms, including subtle or dramatic
          symptoms. Common characteristics include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg leading-relaxed text-[#687076] pl-2">
          <li>Recurrent seizures with no immediate reversible cause</li>
          <li>
            Episodes that may involve altered awareness, loss of consciousness,
            involuntary movements, sensory changes, or behavioral disturbances
          </li>
          <li>
            Wide variability in seizure duration, severity, and frequency
          </li>
        </ul>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          Seizures may range from brief staring spells, sudden muscle jerks, or
          sensory changes to generalized convulsions with complete loss of
          consciousness. Because many medical and psychological conditions can
          mimic seizures, such as fainting, migraines, sleep disorders, or
          cardiac events, expert neurological assessment is critical to ensure an accurate diagnosis.
        </p>

        {/* Types and Causes of Epilepsy */}
        <h2
          className="text-[22px] sm:text-[26px] md:text-[30px] font-semibold text-[#11181C] leading-[28px] sm:leading-[32px] md:leading-[36px] pt-8 md:pt-12"
          style={{ letterSpacing: '0.5%', fontFamily: 'Inter, sans-serif' }}
        >
          Types and Causes of Epilepsy
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          Understanding the underlying cause of epilepsy is fundamental to selecting the most effective treatment strategy and determining long-term prognosis.
        </p>

        <h3
          className="text-[17px] sm:text-[20px] font-bold text-[#11181C] leading-[24px] sm:leading-[28px] pt-4"
          style={{ letterSpacing: '0.5%', fontFamily: 'Inter, sans-serif' }}
        >
          Idiopathic (Genetic) Epilepsy
        </h3>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          Idiopathic epilepsy occurs without identifiable structural abnormalities on brain imaging and is often believed to have a genetic component. Individuals typically have:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg leading-relaxed text-[#687076] pl-2">
          <li>Normal brain development</li>
          <li>Normal neurological function between seizures</li>
          <li>Onset commonly occurs in childhood, adolescence, or early adulthood</li>
        </ul>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          This form of epilepsy frequently responds well to appropriately chosen anti-seizure medications, and many patients achieve excellent long-term seizure control with minimal impact on daily life.
        </p>

        <h3
          className="text-[17px] sm:text-[20px] font-bold text-[#11181C] leading-[24px] sm:leading-[28px] pt-6"
          style={{ letterSpacing: '0.5%', fontFamily: 'Inter, sans-serif' }}
        >
          Symptomatic (Structural or Secondary) Epilepsy
        </h3>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          Symptomatic epilepsy results from a known neurological or systemic condition affecting the brain. Seizure severity and frequency often depend on the extent and nature of the underlying disorder, and patients may experience additional neurological symptoms.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          Common causes include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg leading-relaxed text-[#687076] pl-2">
          <li>Stroke or traumatic brain injury, seizures arise from damaged brain tissue</li>
          <li>Brain tumors or central nervous system infections, structural abnormalities, or inflammation disrupt electrical signaling</li>
          <li>Developmental or genetic disorders, abnormal brain formation leading to chronic seizures</li>
          <li>Lennox-Gastaut syndrome, a severe childhood epilepsy syndrome involving multiple seizure types and developmental delays</li>
          <li>Cerebral palsy, epilepsy resulting from early brain injury or abnormal neurological development</li>
        </ul>
      </div>
    </section>
  );
};

export default EpilepsyDetailSection;
