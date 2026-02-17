import React, { useState } from 'react';

const faqs = [
  {
    question: "How do I know if my seizures mean I have epilepsy?",
    answer: "Epilepsy is usually diagnosed after recurrent, unprovoked seizures. A thorough medical history, neurological exam, and tests like EEG or brain imaging help confirm the diagnosis.",
  },
  {
    question: "Can epilepsy be completely controlled with medication?",
    answer: "Many people achieve good seizure control with properly chosen medications. Some may need adjustments over time to find the most effective regimen.",
  },
  {
    question: "Are there lifestyle changes that can help prevent seizures?",
    answer: "Yes. Maintaining regular sleep, avoiding known triggers, managing stress, and taking medications as prescribed can reduce seizure frequency.",
  },
  {
    question: "Is it safe to drive or work with epilepsy?",
    answer: "Safety depends on seizure control and type. Guidance from a healthcare provider helps determine what activities are safe.",
  },
  {
    question: "How often should follow-ups happen for epilepsy management?",
    answer: "Follow-ups are usually scheduled every few months initially, then adjusted based on seizure control and treatment needs.",
  },
];

export default function EpilepsyFaqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 text-center overflow-hidden">
      <div className="mx-auto flex flex-col max-w-6xl w-full gap-20">
        <div>
          <h2
            className="text-center mb-2 text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-medium leading-[1] text-[#11181C]"
            style={{ letterSpacing: '0.5%', fontFamily: 'Inter, sans-serif' }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-[#687076]">
            Got a Question?
          </p>
        </div>

        <div className="border-t border-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between py-5 text-left gap-4 group"
                aria-expanded={openIndex === index}
              >
                <span className="text-base md:text-lg font-medium text-[#11181C] group-hover:text-[#1893FF] transition">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <img
                    src="/images/arowicon.png"
                    alt=""
                    className="w-7 h-7 object-contain"
                  />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pb-5 pr-10">
                  <p className="text-base md:text-lg text-[#687076] leading-relaxed text-left">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
