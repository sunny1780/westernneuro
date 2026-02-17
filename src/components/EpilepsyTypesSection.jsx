import React from "react";

const EpilepsyTypesSection = () => {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-12 lg:px-16 py-16 md:py-20 text-left">
      <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 text-[#111827]">
        <header className="space-y-3">
          <h2 className="text-[48px] font-medium text-[#11181C] leading-[1]" style={{ letterSpacing: '0.5%' }}>
            Types and Causes of Epilepsy
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#4B5563]">
            Understanding the underlying cause of epilepsy is fundamental to selecting the most
            effective treatment strategy and determining long‑term prognosis.
          </p>
        </header>

        <section className="space-y-3">
          <h3 className="text-lg md:text-xl font-semibold text-[#111827]">
            Idiopathic (Genetic) Epilepsy
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-[#4B5563]">
            Idiopathic epilepsy occurs without identifiable structural abnormalities on brain
            imaging and is often believed to have a genetic component. Individuals typically have:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm md:text-base text-[#4B5563]">
            <li>Normal brain development</li>
            <li>Normal neurological function between seizures</li>
            <li>Onset commonly in childhood, adolescence, or early adulthood</li>
          </ul>
          <p className="text-sm md:text-base leading-relaxed text-[#4B5563]">
            This form of epilepsy frequently responds well to appropriately chosen anti‑seizure
            medications, and many patients achieve excellent long‑term seizure control with minimal
            impact on daily life.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-lg md:text-xl font-semibold text-[#111827]">
            Symptomatic (Structural or Secondary) Epilepsy
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-[#4B5563]">
            Symptomatic epilepsy results from a known neurological or systemic condition affecting
            the brain. Seizure severity and frequency often depend on the extent and nature of the
            underlying disorder, and patients may experience additional neurological symptoms.
            Common causes include:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm md:text-base text-[#4B5563]">
            <li>Stroke or traumatic brain injury, where seizures arise from damaged brain tissue</li>
            <li>
              Brain tumors or central nervous system infections, structural abnormalities, or
              inflammation that disrupt electrical signaling
            </li>
            <li>
              Developmental or genetic disorders that alter normal brain formation and lead to
              chronic seizures
            </li>
            <li>
              Severe childhood epilepsy syndromes, such as Lennox‑Gastaut syndrome, involving
              multiple seizure types and developmental delays
            </li>
            <li>
              Cerebral palsy or other conditions resulting from early brain injury or abnormal
              neurological development
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default EpilepsyTypesSection;

