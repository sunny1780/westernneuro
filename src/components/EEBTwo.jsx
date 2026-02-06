import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const EEGTwo = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.08 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 px-4 sm:px-6 md:px-16 bg-white overflow-x-hidden text-left"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23053759' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div
        className={`relative max-w-6xl mx-auto space-y-6 md:space-y-8 ${
          inView ? 'animate-slide-up-bounce' : 'opacity-0'
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#11181C] leading-tight">
          Advanced Brain Activity Monitoring for Precise Neurological Diagnosis
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          An electroencephalogram (EEG) is a non-invasive diagnostic test that records the brain's electrical activity using small electrodes placed on the scalp. EEG testing plays a central role in evaluating neurological conditions that affect brain function, particularly seizure disorders and altered states of consciousness.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          Because abnormal electrical patterns in the brain may not be visible on imaging studies alone, EEG provides critical functional information that supports accurate diagnosis and treatment planning.
        </p>

        <h3 className="text-xl sm:text-2xl font-bold text-[#11181C] pt-2">
          Key Clinical Uses of EEG Testing
        </h3>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          EEG studies are used to detect, monitor, and classify abnormalities in brain activity that may cause neurological symptoms, including:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg leading-relaxed text-[#687076] pl-2">
          <li>Recurrent or unexplained seizures</li>
          <li>Episodes of loss of consciousness, confusion, or altered awareness</li>
          <li>Abnormal movements or behavioral changes</li>
          <li>Sleep-related neurological conditions</li>
        </ul>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          EEG findings help distinguish between different seizure types and identify abnormal brain regions involved in seizure activity.
        </p>

        <h3 className="text-xl sm:text-2xl font-bold text-[#11181C] pt-6">
          Types of EEG Evaluations
        </h3>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          EEG testing may be performed under different conditions depending on clinical needs. Common EEG applications include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg leading-relaxed text-[#687076] pl-2">
          <li>Routine EEG recordings</li>
          <li>EEG during wakefulness and sleep</li>
          <li>EEG activation techniques such as hyperventilation or photic stimulation</li>
        </ul>
        <p className="text-base md:text-lg leading-relaxed text-[#687076]">
          Each approach provides valuable diagnostic information tailored to the patient's symptoms.
        </p>

        {/* Image */}
        <div
          className="w-full overflow-hidden rounded-xl pt-8 md:pt-12"
          style={{ aspectRatio: "1280/442", maxWidth: "100%" }}
        >
          <img
            src="/images/lines.png"
            alt="EEG waveforms"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Our EEG Diagnostic and Interpretation Approach */}
        <div className="pt-8 md:pt-12 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#11181C]">
            Our EEG Diagnostic and Interpretation Approach
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#687076]">
            Dr. Faisal utilizes advanced EEG technology combined with expert clinical interpretation to ensure accurate and meaningful results.
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-[#11181C]">
            The EEG Process Includes:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg leading-relaxed text-[#687076] pl-2">
            <li>Pre-test preparation guidance to ensure accurate recordings</li>
            <li>A painless procedure lasting approximately 45-60 minutes</li>
            <li>Continuous monitoring during relaxation, breathing, or sleep</li>
          </ul>
          <h3 className="text-xl md:text-2xl font-bold text-[#11181C] pt-2">
            Expert Interpretation and Follow-Up
          </h3>
          <p className="text-base md:text-lg leading-relaxed text-[#687076]">
            All EEG studies are interpreted by a board-certified clinical neurophysiologist, ensuring precise analysis and integration into the patient's overall neurological care plan.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[#687076]">
            The goal of EEG testing is accurate diagnosis, informed treatment decisions, and long-term neurological management.
          </p>
          <Link
            to="/book-appointment"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white bg-[#1893FF] hover:bg-[#0f80dd] transition mt-4"
          >
            Schedule Appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EEGTwo;
