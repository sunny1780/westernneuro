import React from "react";

const defaultBlock1 = {
  title1: "Comprehensive Neurological Care",
  desc1: "Our team provides expert diagnosis and treatment for a wide range of neurological conditions, from epilepsy and headaches to sleep disorders and neuromuscular conditions. We use advanced diagnostics and evidence-based treatments tailored to each patient.",
  title2: "Patient-Centered Approach",
  desc2: "We take the time to listen, explain your condition clearly, and involve you in every step of your care plan. Your comfort and long-term wellbeing are our priority.",
};

const defaultBlock2 = {
  title1: "Sleep Medicine & Clinical Neurophysiology",
  desc1: "We offer full sleep studies, EEG, and nerve conduction studies in a comfortable setting. Our board-certified specialists help manage sleep disorders and neuromuscular conditions with the latest technology and personalized treatment plans.",
  title2: "Why Choose Us",
  desc2: "Triple board certification, academic appointments at UCLA, and active privileges at Providence Saint Joseph Hospital, UCLA Medical Center, and Cedars-Sinai ensure you receive the highest standard of care.",
};

const InfoSection = ({
  image1 = "/images/services/3.jpg",
  image2 = "/images/services/2.jpg",
  block1 = defaultBlock1,
  block2 = defaultBlock2,
}) => {
  const b1 = { ...defaultBlock1, ...block1 };
  const b2 = { ...defaultBlock2, ...block2 };

  return (
    <section className="px-4 sm:px-6 md:px-16 py-12 md:py-16 space-y-16 md:space-y-24 text-left">
      
      {/* Section 1 - Text left, Picture right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {b1.title1}
          </h2>
          <p className="text-gray-600 mb-6">
            {b1.desc1}
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {b1.title2}
          </h3>
          <p className="text-gray-600">
            {b1.desc2}
          </p>
        </div>

        <div className="w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
          {image2 && (
            <img src={image2} alt={b1.title1} className="w-full h-full object-cover rounded-3xl" />
          )}
        </div>
      </div>

      {/* Section 2 - Picture left, Text right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 order-2 md:order-1">
          {image1 && (
            <img src={image1} alt={b2.title1} className="w-full h-full object-cover rounded-3xl" />
          )}
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {b2.title1}
          </h2>
          <p className="text-gray-600 mb-6">
            {b2.desc1}
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {b2.title2}
          </h3>
          <p className="text-gray-600">
            {b2.desc2}
          </p>
        </div>
      </div>

      {/* Text Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Our Services Overview
        </h2>
        <p className="text-gray-600">
          Western Neurological Associates and Western Sleep Center offer expert care in neurology, sleep medicine, and clinical neurophysiology. From initial consultation through ongoing management, we are committed to helping you achieve better health and quality of life.
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          Conditions We Treat
        </h3>
        <p className="text-gray-600">
          Epilepsy, headaches, neuromuscular disorders, sleep apnea and other sleep disorders, nerve and muscle conditions, and more. We use advanced diagnostics including EEG and nerve conduction studies to guide treatment.
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          Location & Appointments
        </h3>
        <p className="text-gray-600">
          We are located in Burbank, California. Schedule a consultation by calling 818.845.2255 or booking online. We look forward to supporting your neurological and sleep health.
        </p>
      </div>

      {/* List Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">
          What to Expect
        </h3>

        <ol className="list-decimal list-inside space-y-4 text-gray-600">
          <li>
            <span className="font-semibold text-gray-900">Initial Consultation</span>
            <p className="mt-2">
              A thorough review of your history, symptoms, and goals so we can recommend the right diagnostics and treatment plan.
            </p>
          </li>

          <li>
            <span className="font-semibold text-gray-900">Diagnostic Testing</span>
            <p className="mt-2">
              When needed, we arrange EEG, sleep studies, nerve conduction studies, or other tests in a comfortable, professional environment.
            </p>
          </li>

          <li>
            <span className="font-semibold text-gray-900">Ongoing Care</span>
            <p className="mt-2">
              Follow-up visits and care coordination to monitor your progress and adjust treatment for the best outcomes.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default InfoSection;
