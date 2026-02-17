import React from "react";

const EpilepsyTextSection = () => {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-12 lg:px-16 py-16 md:py-20 text-left">
      <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 text-[#111827]">
        <header className="space-y-3">
          <h2 className="text-[48px] font-medium text-[#11181C] leading-[1]" style={{ letterSpacing: '0.5%' }}>
            Comprehensive Seizure Disorder Diagnosis and Treatment
          </h2>
          <h3 className="text-lg md:text-xl font-semibold text-[#111827]">
            Expert Evaluation and Personalized Care for Epilepsy
          </h3>
        </header>

        <div className="space-y-4 text-sm md:text-base leading-relaxed text-[#4B5563]">
          <p>
            Epilepsy is a chronic neurological disorder marked by recurrent, unprovoked seizures
            resulting from abnormal electrical discharges in the brain. While a single seizure
            episode can occur due to temporary factors such as fever, infection, or metabolic
            imbalance, epilepsy is diagnosed only when there is an ongoing tendency for repeated
            seizures.
          </p>
          <p>
            Because epilepsy is a highly individualized condition, varying widely in seizure type,
            frequency, triggers, and response to treatment, accurate diagnosis and tailored
            management are essential to achieving long‑term seizure control and preserving quality
            of life.
          </p>
        </div>

        <section className="space-y-3">
          <h3 className="text-lg md:text-xl font-semibold text-[#111827]">
            Key Clinical Features of Epilepsy
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-[#4B5563]">
            Epilepsy may present in many forms, including subtle or dramatic symptoms. Common
            characteristics include:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm md:text-base text-[#4B5563]">
            <li>Recurrent seizures with no immediate reversible cause</li>
            <li>
              Episodes that may involve altered awareness, loss of consciousness, involuntary
              movements, sensory changes, or behavioral disturbances
            </li>
            <li>Wide variability in seizure duration, severity, and frequency</li>
          </ul>
          <p className="text-sm md:text-base leading-relaxed text-[#4B5563]">
            Seizures may range from brief staring spells or sudden muscle jerks to generalized
            convulsions with complete loss of consciousness. Because many medical and psychological
            conditions can mimic seizures, expert neurological assessment is critical to ensure an
            accurate diagnosis.
          </p>
        </section>
      </div>
    </section>
  );
};

export default EpilepsyTextSection;

