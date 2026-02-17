import React, { useState } from 'react';

const faqs = [
  {
    question: "Why do I keep getting migraines even with painkillers?",
    answer: "Frequent migraines may need preventive therapy, trigger management, or prescription treatments beyond over-the-counter medications.",
  },
  {
    question: "How can I tell the difference between tension headaches and migraines?",
    answer: "Migraines often cause moderate-to-severe pain with nausea, light sensitivity, or visual disturbances, while tension headaches usually feel like pressure or tightness.",
  },
  {
    question: "Are there triggers I should avoid to prevent headaches?",
    answer: "Common triggers include certain foods, dehydration, stress, hormonal changes, and poor sleep. Identifying personal triggers can help reduce the frequency of attacks.",
  },
  {
    question: "What treatment options are available if standard pain relievers don't work?",
    answer: "Options include prescription medications, preventive therapies, lifestyle adjustments, and in some cases, advanced interventions for chronic headaches.",
  },
  {
    question: "Can chronic headaches affect my daily life?",
    answer: "Yes, they can disrupt sleep, reduce work productivity, and interfere with routine activities, making proper evaluation important.",
  },
];

export default function HeadacheFaqs() {
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
