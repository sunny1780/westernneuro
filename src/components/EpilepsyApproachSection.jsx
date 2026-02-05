import React from "react";

const EpilepsyApproachSection = () => {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-12 lg:px-16 py-16 md:py-20 text-left">
      <div className="max-w-6xl mx-auto space-y-10 md:space-y-12">
        {/* Image */}
        <div className="rounded-[24px] overflow-hidden bg-black/5">
          <img
            src="/images/services/3.jpg"
            alt="Epilepsy diagnostic visualization"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text content */}
        <div className="max-w-5xl space-y-6 text-[#111827]">
          <header className="space-y-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Our Diagnostic and Treatment Approach for Epilepsy
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-[#4B5563]">
              Dr. Faisal offers comprehensive epilepsy care using advanced diagnostic tools combined
              with individualized neurological evaluation. Each patient&apos;s care plan is
              developed based on seizure type, frequency, triggers, lifestyle factors, and overall
              health.
            </p>
          </header>

          <div className="space-y-8 md:space-y-8">
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-semibold">
                Diagnostic Evaluation Includes:
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 text-sm md:text-base text-[#4B5563]">
                <li>Advanced EEG testing and expert interpretation</li>
                <li>Detailed seizure history and neurological examination</li>
                <li>Identification of seizure patterns, triggers, and risk factors</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-semibold">
                Treatment Strategies May Include:
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 text-sm md:text-base text-[#4B5563]">
                <li>Personalized anti‑seizure medication selection and adjustment</li>
                <li>Ongoing medication monitoring to minimize side effects</li>
                <li>Trigger identification and lifestyle modification guidance</li>
                <li>
                  Patient and family education for safety and seizure preparedness
                </li>
                <li>Long‑term follow‑up and care optimization</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EpilepsyApproachSection;

