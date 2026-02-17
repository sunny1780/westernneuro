import React, { useState } from 'react';

const faqs = [
  {
    question: "Why do I feel tired even after a full night's sleep?",
    answer: "Sleep disorders like sleep apnea, restless leg syndrome, or insomnia can prevent restorative sleep and lead to daytime fatigue.",
  },
  {
    question: "Could my snoring or restless legs be a serious problem?",
    answer: "Yes. Sleep-related breathing or movement disorders can impact overall health and should be evaluated.",
  },
  {
    question: "How are sleep disorders diagnosed?",
    answer: "Diagnosis includes a detailed sleep history, neurological examination, and sometimes overnight sleep studies.",
  },
  {
    question: "Can lifestyle changes help improve sleep?",
    answer: "Yes. Good sleep hygiene, managing stress, regular exercise, and targeted therapies can improve sleep quality.",
  },
  {
    question: "How long does it take to see improvement?",
    answer: "Improvement varies depending on the condition and treatment. Some people notice changes within weeks, while others may require ongoing adjustments.",
  },
];

export default function SleepFaqs() {
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
